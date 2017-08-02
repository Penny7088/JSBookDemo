/**
 * 作者:penny
 *
 */

var Unity_1_action = cc.Scene.extend({
    onEnter: function () {
        this._super();
        this.loadMainLayer();
    },
    loadMainLayer: function () {
        var layer = new UnityLayer();
        this.addChild(layer);
    }
});

var UnityLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        // this.loadMoveAction();
        // this.loadJumpAction();
        // this.loadBezierAction();
        // this.loadScaleAction();
        // this.loadRotateAction();
        // this.loadFadeAction();
        // this.loadTintAction();
        // this.loadBlinkAction();
        // this.loadOrbitCameraAction();
        // this.loadAnimationPlistAction();
        // this.loadAnimationByFileAction();
        // this.loadDelayTime();
        // this.loadRepeatAction();
        // this.loadRepeatForeverAction();
        // this.loadSequenceAction();
        this.loadSpawnAction();
    },
    loadMoveAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        var action1 = cc.moveTo(1, cc.p(200, 100));
        var action2 = cc.moveBy(1, cc.p(0, 100));
        node.runAction(cc.sequence(action1, action2));
    },
    loadJumpAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);

        //------------------------------------------------------------------
        //  cc.jumpTo && cc.jumpBy  跳跃动作
        //------------------------------------------------------------------
        //【接口】: cc.jumpTo(duration, position, y, height, jumps);
        var duration, position, y, height, jumps;
        cc.jumpTo(duration, position, y, height, jumps);
        cc.jumpBy(duration, position, y, height, jumps);

        //【例子】 : 1秒时间，跳到(100, 86)，跳跃高度为50像素，总共跳跃4次
        var jumpTo = cc.jumpTo(1, cc.p(100, 86), 50, 4);
        //【例子】 : 1秒时间，原地跳，跳跃高度为100像素，总共跳跃4次
        var jumpBy = cc.jumpBy(1, cc.p(0, 0), 100, 4);
        node.runAction(cc.sequence(jumpTo, jumpBy));
    },//贝塞尔曲线
    loadBezierAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 4, cc.winSize.height / 4);
        // ------------------------------------------------------------------
        // cc.bezierTo && cc.bezierBy 贝塞尔曲线运动动作
        // ------------------------------------------------------------------
        //【接口】: cc.bezierTo(time, control);
        var duration, contorl;
        cc.bezierTo(duration, contorl);
        cc.bezierBy(duration, contorl);

        var size = cc.winSize;

        var bezierToConfig = [
            cc.p(0, node.height),
            cc.p(size.width, size.height),
            cc.p(-size.width, 0)
        ];
        var bezierTo = cc.bezierTo(1, bezierToConfig);

        var bezierByConfig = [
            cc.p(0, size.height),
            cc.p(-size.width / 2, size.height),
            cc.p(-size.width / 2, 0)
        ];
        var bezierBy = cc.bezierBy(1, bezierByConfig);


        node.runAction(cc.sequence(bezierTo, bezierBy));
    },
    loadScaleAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        //------------------------------------------------------------------
        //cc.scaleTo && cc.scaleBy  缩放动作
        //------------------------------------------------------------------
        var duration, sx, sy;
        cc.scaleTo(duration, sx, sy);
        cc.scaleBy(duration, sx, sy);

        //【例子】: 用1秒的时间，把图片缩放到【原始】大小的50%
        var scaleTo = cc.scaleTo(1, 0.5);
        //【例子】: 用1秒的时间，把图片缩放到【当前】大小的200%
        var scaleBy = cc.scaleBy(1, 2);
        //【例子】: 用1秒的时间，把x方向缩放到【原始】大小的50%， y方向缩放到【原始】大小的150%
        var scale = cc.scaleBy(1, 0.5, 1.5);
        var scaleReverse = scale.reverse();
        node.runAction(cc.sequence(scaleTo, scaleBy, scale, scaleReverse));
    },
    loadRotateAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(node);

        var duration, rotateX, rotateY;
        cc.rotateBy(duration, rotateX, rotateY);
        cc.rotateTo(duration, rotateX, rotateY);
        //【例子】 :  用1秒的时间，将x轴旋转到-90度，y轴旋转到-45度
        var rotate = cc.rotateTo(1, -90, -45);
        //【例子】 :  用1秒的时间，整体旋转到90度
        var rotateTo = cc.rotateTo(1, 90);
        //【例子】 :  用1秒的时间，基于【当前】的角度整体旋转-90度
        var rotateBy = cc.rotateBy(1, -90);

        node.runAction(cc.sequence(rotate, rotateTo, rotateBy));
    },
    loadFadeAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(node);

        //------------------------------------------------------------------
        // cc.fadeIn && cc,fadeOut 渐变动作
        //-----------------------------------------------------------------
        var duration, opacity;
        cc.fadeIn(duration);
        cc.fadeOut(duration);
        cc.fadeTo(duration, opacity);

        //【举例】：用1秒的时间，淡出
        var fadeOut = cc.fadeOut(1);
        //【举例】：用1秒的时间，淡入
        var fadeIn = cc.fadeIn(1);
        //【举例】：用1秒的时间，透明度渐变到半透明(128)
        var fadeTo = cc.fadeTo(1, 128);

        node.runAction(cc.sequence(fadeTo, fadeOut, fadeIn));
    },
    loadTintAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(node);
        //------------------------------------------------------------------
        //cc.tintTo && cc.tintBy 色彩变化的消失动作
        //------------------------------------------------------------------
        //【作用】：创建一个色彩变化的动作 ， 支持反向
        //参数1：色彩变化的动作【时间】
        //参数2：红色分量
        //参数3：蓝色分量
        //参数4：绿色分量
        var dutation, deltaRed, deltaGreen, deltaBlue;
        cc.tintTo(dutation, deltaRed, deltaGreen, deltaBlue);
        cc.tintBy(dutation, deltaRed, deltaGreen, deltaBlue);

        //【举例】：用1秒的时间，红色和蓝色分量升到255，绿色分量降到0。
        var tintTo = cc.tintTo(1, 255, 0, 255);
        //【举例】：用1秒的时间，基于【当前】的颜色分量值，红色和蓝色分量不变，绿色分量上升255。
        var tintBy = cc.tintBy(1, 255, 255, 255);
        node.runAction(cc.sequence(tintTo, tintBy));
    },
    loadBlinkAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(node);

        //------------------------------------------------------------------
        // cc.blink  闪烁的动作
        //------------------------------------------------------------------
        //【作用】：创建一额闪烁的动1
        //参数1：闪烁完成的时间
        //参数2:闪烁的次数
        var duration, blink;
        //【接口】：
        cc.blink(duration, blink);
        //【举例】：1秒时间，闪烁10次
        var blink2 = cc.blink(3, 100);
        node.runAction(cc.sequence(blink2));
    },
    loadOrbitCameraAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.height / 2);
        //------------------------------------------------------------------
        //cc.orbitCamera   摄像机动作
        //------------------------------------------------------------------
        //【作用】：创建一个球面坐标轨迹进行旋转的动作
        //参数1 ：旋转轨迹的时间
        //参数2 ：起始半径
        //参数3 ：半径差
        //参数4 ：起始z角
        //参数5 ：旋转z角的差
        //参数6 ：起始x角
        //参数7 ：旋转x角的差
        //【举例】：

        //cc.orbitCamera 3.0后已经废除
        // var orbit1 = cc.orbitCamera(2, 10, 0, 0, 180, 0, 0);
        // var orbit2 = cc.orbitCamera(2, 10, 0, 0, 180, -45, 0);
        // var orbit3 = cc.orbitCamera(2, 10, 0, 0, 180, 90, 0);
        // var orbitCamera = cc.sequence(orbit1, orbit2, orbit3);
        // node.runAction(orbitCamera);
    },
    loadAnimationPlistAction: function () {
        cc.spriteFrameCache.addSpriteFrames(res.u4_dance_plist, res.u4_dance_png); // 添加帧缓存
        var node = new cc.Sprite("#dance_0.png");

        node.runAction(cc.rotateBy(2, -90)).repeatForever();
        this.addChild(node);
        node.setPosition(568, 320);
        var frames = [];
        for (var i = 0; i < 13; i++) {
            var str = "dance_" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            frames.push(frame);
        }

        var animation = new cc.Animation(frames, 0.15);
        animation.setRestoreOriginalFrame(true);// 设置[是否恢复到第一帧]
        var animate = cc.animate(animation);// 用cc.animate将animation包装成动作
        node.runAction(animate);
    },
    loadAnimationByFileAction: function () {
        var node = new cc.Sprite(res.sh_node_64_png);
        this.addChild(node);
        node.setPosition(568, 320);
        // 创建动画
        var animation = new cc.Animation();
        animation.addSpriteFrameWithFile(res.sh_node_64_png);
        animation.addSpriteFrameWithFile(res.sh_node_128_png);
        animation.addSpriteFrameWithFile(res.sh_node_256_png);
        animation.addSpriteFrameWithFile(res.sh_node_512_png);
        // 设置[帧间隔]
        animation.setDelayPerUnit(0.1);
        animation.setRestoreOriginalFrame(true);

        var animate = cc.animate(animation);
        node.runAction(animate)
    },
    loadDelayTime: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);

        var duration;
        cc.delayTime(duration);
        //【举例】：延时0.5秒，将节点的x轴坐标左移100
        var delayTime = cc.delayTime(0.5);
        var moveBy = cc.moveBy(1, cc.p(-100, 0));
        var sequence = cc.sequence(delayTime, moveBy);
        node.runAction(sequence);

    },
    loadRepeatAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);

        //【举例】：用时0.5秒，节点旋转-90度，重复4次。
        var rotate = cc.rotateBy(0.5, -90);
        var repeat = rotate.repeat(4); // 重复4次。
        node.runAction(repeat);
    },
    loadRepeatForeverAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        //【举例】：用时0.5秒，节点旋转-90度，一直重复执行。
        var rotateBy = cc.rotateBy(0.5, -90);
        var repeatForever = rotateBy.repeatForever();
        node.runAction(repeatForever);
    },
    loadSequenceAction: function () {
        var node = new cc.Sprite(res.sh_node_128_png);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(node)
        //【举例】：每个动作耗时0.5秒，先后按顺序执行了移动、闪烁、缩放和旋转4个动作。
        var moveBy = cc.moveBy(0.5, cc.p(-100, 0));
        var blink = cc.blink(0.5, 8);
        var scaleTo = cc.scaleTo(0.5, 1.5);
        var rotateTo = cc.rotateTo(0.5, 90);
        var sequence = cc.sequence(moveBy, blink, scaleTo, rotateTo);
        node.runAction(sequence);

    },
    loadSpawnAction: function () {
        //【举例】：两个动作并发执行。其一：用1秒的时间，节点的x轴坐标左移200。其二：用时0.5秒，闪烁8次。
        var node = new cc.Sprite(res.sh_node_128_png);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);

        var moveBy = cc.moveBy(1, cc.p(-200, 0));
        var blink = cc.blink(0.5,8);
        var spawn = cc.spawn(moveBy,blink); //并发
        node.runAction(spawn);
    }
});


