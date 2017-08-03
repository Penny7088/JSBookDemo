/**
 * 作者:penny
 *
 */

//创建场景
var unitEvent = cc.Scene.extend({
    onEnter: function () {
        this._super();
        //创建层类
        //触摸
        // var layer = new TouchOneByOneLayer();
        //摇杆demo
        var layer = new RockerLayer();
        this.addChild(layer);
    }
});

var RockerLayer = cc.Layer.extend({
    rocker: null,
    cocosIcon: null,
    ctor: function () {
        this._super(cc.color(150, 150, 150));
        // 加载[色块精灵]
        this.loadCocosIcon();
        //加载摇杆
        this.loadRocker();
        return true;
    },
    loadCocosIcon: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        this.cocosIcon = node;
        node.setPosition(480, 320);
    },
    loadRocker: function () {
        var roker = new Roker(res.u5_control_base_png, res.u5_control_knob_png, ROCKER_TYPE.DEFAULT);
        this.addChild(roker);
        roker.setCallback(function (vec) {
            cc.log("---------------");
            cc.log("速度，x：", vec.x, " y：", vec.y);
            cc.log("角度：", roker.angle);
            cc.log("方向：", roker.direction);
            this.cocosIcon.x += vec.x * 10;
            this.cocosIcon.y += vec.y * 10;
        }.bind(this));
        roker.setPosition(200, 130);
    }
});

// ==================================================================
// -------------------- TOUCH_ONE_BY_ONE 示例 -----------------------
// ==================================================================

var TouchOneByOneLayer = cc.Layer.extend({
    cyanBlock: null,
    magentaBlock: null,
    yellowBlock: null,

    ctor: function () {
        this._super();
        this.loadSprite();
        this.bindEventListener();
    },
    loadSprite: function () {
        //创建精灵
        this.cyanBlock = new cc.Sprite(res.u5_cyan_block_png);
        this.cyanBlock.setPosition(
            cc.winSize.width / 2 - this.cyanBlock.getContentSize().width / 2,
            cc.winSize.height / 2 + this.cyanBlock.getContentSize().height / 2);
        this.addChild(this.cyanBlock);

        this.magentaBlock = new cc.Sprite(res.u5_magenta_block_png);
        this.magentaBlock.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(this.magentaBlock);

        this.yellowBlock = new cc.Sprite(res.u5_yellow_block_png);
        this.yellowBlock.setPosition(this.yellowBlock.getContentSize().width, 0);
        this.magentaBlock.addChild(this.yellowBlock);
    },
    bindEventListener: function () {
        //创建监听器
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,// TODO【事件吞噬】，阻止事件传递给下一层(层根据事件优先级而定，而非对象(节点)的zOrder值)
            target: this,// 指定事件源
            onTouchBegan: function (touch, event) {
                // 获取当前触发事件的对象 TODO【备注】：有比getCurrentTarget更好的选择。
                //  但这里主要是3个精灵引用了同一套的事件处理方案，所以采用此方式。见下面的.clone
                var target = event.getCurrentTarget();
                // 获取点击坐标[基于本地坐标]
                var nodeSpace = target.convertToNodeSpace(touch.getLocation());
                // 获取当前节点大小
                var size = target.getContentSize();
                // 区域设定
                var rect = cc.rect(0, 0, size.width, size.height);
                // 判断触摸点是否在节点区域内
                if (!(cc.rectContainsPoint(rect, nodeSpace))) {
                    return false;
                }
                // 开始逻辑处理
                cc.log("onTouchBegan : x = " + nodeSpace.x + ", y = " + nodeSpace.y);
                target.setOpacity(180);
                return true;// TODO  true 和 false 的区别。 return false 的话，onTouchMoved和onTouchEnded不会被调用到
            },
            onTouchMoved: function (touch, event) {
                var target = event.getCurrentTarget();
                // 返回从【前一个】触摸点【到当前点】的delta【距离】
                var delta = touch.getDelta();
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
                target.opacity = 255;
            }
        });

        cc.eventManager.addListener(listener, this.cyanBlock);
        cc.eventManager.addListener(listener.clone(), this.magentaBlock);
        cc.eventManager.addListener(listener.clone(), this.yellowBlock);
    }
});