/**
 * 作者:penny
 *
 */

//创建场景
var Unit_Ui = cc.Scene.extend({
    onEnter: function () {
        this._super();

        var layer = new UILayer();
        this.addChild(layer);
    }
});

var UILayer = cc.LayerColor.extend({
    ctor: function () {
        this._super();
        // this.loadText();
        // this.loadButton();
        // this.loadCheckBox();
        // this.loadSlider();
        // this.loadImageView();
        // this.loadLoadingBar();
        // this.loadTextFiled();
        // this.loadLayout();
        // this.loadLayoutLinearVertical();
        // this.loadScrollView();
        // this.loadPageView();
        this.loadListView();
    },
    loadText: function () {
        // this.loadTextTTF();
        // this.loadTextBMFont();
        this.loadTextAtlas();
    },
    loadTextTTF: function () {
        var node = new ccui.Text("我是Text文本", "AmericanTypewriter", 30);
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 + 100);
    },
    loadTextBMFont: function () {
        var node = new ccui.TextBMFont("12345", "res/unit03_base/fonts/number.fnt");
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
    },
    loadTextAtlas: function () {
        var node = new ccui.TextAtlas("798", "res/unit03_base/fonts/score.png", 41, 50, '0');
        this.addChild(node);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 - 100);
    },
    loadButton: function () {
        var node = new ccui.Button(res.u10_btn_start_normal_png, res.u10_btn_start_pressed_png, "");
        this.addChild(node);
        node.setPosition(200, cc.winSize.height / 2);
        node.setTouchEnabled(true);
        node.addTouchEventListener(this.onButtonTouchEvent, this);
    },
    loadCheckBox: function () {
        var node = new ccui.CheckBox();
        this.addChild(node);
        node.loadTextures("res/unit10_ui/check_box_normal.png",
            "res/unit10_ui/check_box_normal_press.png",
            "res/unit10_ui/check_box_active.png",
            "res/unit10_ui/check_box_normal_disable.png",
            "res/unit10_ui/check_box_active_disable.png");
        node.setTouchEnabled(true);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        node.addEventListener(this.onCheckBoxSelectedEvent, this);

    },
    loadSlider: function () {
        var slider = new ccui.Slider();
        this.addChild(slider);
        slider.loadBarTexture("res/unit10_ui/slider_bar.png");
        slider.loadSlidBallTextures(
            "res/unit10_ui/slider_ball_normal.png",
            "res/unit10_ui/slider_ball_pressed.png",
            "res/unit10_ui/slider_ball_disabled.png"
        );
        slider.loadProgressBarTexture("res/unit10_ui/slider_progress.png");
        slider.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        slider.addEventListener(this.onSliderlistener, this);
    },
    loadImageView: function () {
        var imageView = new ccui.ImageView("res/node_256.png");
        this.addChild(imageView);
        imageView.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
    },
    loadLoadingBar: function () {
        var loadingBar = new ccui.LoadingBar();
        this.addChild(loadingBar);
        loadingBar.loadTexture("res/unit10_ui/slider_progress.png");
        loadingBar.setDirection(ccui.LoadingBar.TYPE_LEFT);
        loadingBar.setPercent(50);
        loadingBar.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);

    },
    loadTextFiled: function () {
        var textField = new ccui.TextField("请输入账号", "Arial", 30);
        this.addChild(textField);
        textField.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        textField.addEventListener(this.onTextFieldEvent, this);
        textField.setPasswordStyleText("*");// 设置[密码样式]
        textField.setPasswordEnabled(true);// 启用[密码模式]
    },
    // 加载[默认布局]
    loadLayout: function () {
        var layout = new ccui.Layout();
        this.addChild(layout);
        layout.setContentSize(852, 480);
        layout.x = (cc.winSize.width - layout.width ) / 2;
        layout.y = (cc.winSize.height - layout.height) / 2;
        layout.setBackGroundColor(cc.color(128, 128, 128));
        // 设置背景颜色类型
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);

        var layoutRect = layout.getContentSize();

        var button1 = new ccui.Button();
        layout.addChild(button1);
        button1.setTouchEnabled(true);
        button1.loadTextures("res/unit10_ui/btn_start_normal.png", "res/unit10_ui/btn_start_pressed.png", "");
        button1.x = button1.width / 2;
        button1.y = layoutRect.height - button1.height / 2;

        var button2 = new ccui.Button();
        layout.addChild(button2);
        button2.setTouchEnabled(true);
        button2.loadTextures("res/unit10_ui/btn_start_normal.png", "res/unit10_ui/btn_start_pressed.png", "");
        button2.x = button1.x + button1.width / 2 + button2.width / 2;
        button2.y = layoutRect.height - button2.height / 2;

        var button3 = new ccui.Button();
        layout.addChild(button3);
        button3.setTouchEnabled(true);
        button3.loadTextures("res/unit10_ui/btn_start_normal.png", "res/unit10_ui/btn_start_pressed.png", "");
        button3.x = button2.x + button2.width / 2 + button3.width / 2;
        button3.y = layoutRect.height - button3.height / 2;


    },
    // 加载[垂直布局]
    loadLayoutLinearVertical: function () {
        var layout = new ccui.Layout();
        this.addChild(layout);
        layout.setContentSize(852, 480);
        layout.x = (cc.winSize.width - layout.width ) / 2;
        layout.y = (cc.winSize.height - layout.height) / 2;
        layout.setBackGroundColor(cc.color(128, 128, 128));
        // 设置背景颜色类型
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setLayoutType(ccui.Layout.LINEAR_VERTICAL);

        var buttonTexture = "res/unit10_ui/btn_start_normal.png";
        // 按钮1
        var button1 = new ccui.Button();
        layout.addChild(button1);
        button1.setTouchEnabled(true);
        button1.loadTextures(buttonTexture, buttonTexture, "");
        // 布局参数
        var lp1 = new ccui.LinearLayoutParameter();
        button1.setLayoutParameter(lp1);
        lp1.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL);
        lp1.setMargin(new ccui.Margin(0, 10, 0, 10));

        // button2
        var button2 = new ccui.Button();
        layout.addChild(button2);
        button2.setTouchEnabled(true);
        button2.loadTextures("res/unit10_ui/btn_start_normal.png", "res/unit10_ui/btn_start_pressed.png", "");

        var lp2 = new ccui.LinearLayoutParameter();
        button2.setLayoutParameter(lp2);
        lp2.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL);
        lp2.setMargin(new ccui.Margin(0, 10, 0, 10));

        // button3
        var button3 = new ccui.Button();
        layout.addChild(button3);
        button3.setTouchEnabled(true);
        button3.loadTextures("res/unit10_ui/btn_start_normal.png", "res/unit10_ui/btn_start_pressed.png", "");

        var lp3 = new ccui.LinearLayoutParameter();
        button3.setLayoutParameter(lp3);
        lp3.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL);
        lp3.setMargin(new ccui.Margin(0, 10, 0, 10));

    },
    loadScrollView: function () {
        var scrollView = new ccui.ScrollView();
        this.addChild(scrollView);
        scrollView.setContentSize(cc.size(512, 400));
        cc.log("winsize:width" + cc.winSize.width);
        cc.log("winsize:height" + cc.winSize.height);
        cc.log("Scroll:width" + scrollView.width);
        cc.log("Scroll:height" + scrollView.height);
        scrollView.x = (cc.winSize.width - scrollView.width) / 2;
        scrollView.y = (cc.winSize.height - scrollView.height) / 2;
        scrollView.setTouchEnabled(true);
        scrollView.setDirection(ccui.ScrollView.DIR_HORIZONTAL);

        var imageView = new ccui.ImageView("res/unit07_design/background.png");
        scrollView.addChild(imageView);
        scrollView.setInnerContainerSize(cc.size(imageView.width, imageView.height));
        imageView.x = imageView.width / 2;
        imageView.y = imageView.height / 2;
    },
    loadPageView: function () {
        var pageView = new ccui.PageView();
        this.addChild(pageView);
        pageView.setTouchEnabled(true);
        pageView.setContentSize(cc.winSize);
        pageView.x = (cc.winSize.width - pageView.width) / 2;
        pageView.y = (cc.winSize.height - pageView.height) / 2;

        for (var i = 0; i < 3; i++) {
            var layout = new ccui.Layout();
            pageView.addChild(layout);

            var imageView = new ccui.ImageView("res/unit07_design/background.png");
            layout.addChild(imageView);
            imageView.x = pageView.width / 2;
            imageView.y = pageView.height / 2;
        }

        pageView.addEventListener(function (sender, type) {
            switch (type) {
                case ccui.PageView.EVENT_TURNING:
                    var index = pageView.getCurPageIndex() + 1;
                    cc.log("当前第" + index + " 页");
                    break;
                default:
                    break;
            }
        }, this);

    },
    loadListView: function () {
        // 创建listView
        var listView = new ccui.ListView();
        this.addChild(listView);
        //设置触摸
        listView.setTouchEnabled(true);
        //设置匡高
        listView.setContentSize(cc.size(240, 120));
        //设置方向
        listView.setDirection(ccui.ScrollView.DIR_HORIZONTAL);
        listView.setBackGroundColor(cc.color(128, 128, 128));
        listView.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        listView.x = (cc.winSize.width - listView.width) / 2;
        listView.y = (cc.winSize.height - listView.height) / 2;

        listView.addEventListener(function (sender, type) {
            switch (type){
                case ccui.ListView.EVENT_SELECTED_ITEM:
                    cc.log("当前项索引：" + sender.getCurSelectedIndex());
                    break;
                default:
                    break;
            }
        },this);

        listView.scale = 2;
        //创建按钮
        var default_button = new ccui.Button();
        default_button.setName("TextButton");
        default_button.setTouchEnabled(true);
        default_button.loadTextures("res/unit10_ui/btn_normal.png", "res/unit10_ui/btn_ressed.png", "");
        //创建模型
        var default_item = new ccui.Layout();
        default_item.addChild(default_button);
        default_item.setTouchEnabled(true);
        default_item.setContentSize(default_button.getContentSize());
        default_button.x = default_item.width / 2;
        default_button.y = default_item.height / 2;
        // 设置模型
        listView.setItemModel(default_item);
        // 添加4个项
        for (var i = 0; i < 4; ++i) {
            listView.pushBackDefaultItem();
        }
        // 给前4个项设置设置文本标签
        for (var i = 0; i < 4; i++){
            var item = listView.getItem(i);
            var button = item.getChildByName("TextButton");
            var index = listView.getIndex(item);
            button.setTitleText("按钮" + i);
        }
    },
    onTextFieldEvent: function (sender, type) {
        switch (type) {
            case ccui.TextField.EVENT_ATTACH_WITH_IME:
                cc.log("[挂载到]输入法编辑器");
                break;
            case ccui.TextField.EVENT_DETACH_WITH_IME:
                cc.log("输入法编辑器[失去挂载]");
                break;
            case ccui.TextField.EVENT_INSERT_TEXT:
                cc.log("输入法编辑器[输入]");
                break;
            case ccui.TextField.EVENT_DELETE_BACKWARD:
                cc.log("输入法编辑器[删除]");
                break;
            default:
                break;
        }
        cc.log("编辑框中内容：", sender.getString());
    },
    onSliderlistener: function (sender, type) {
        switch (type) {
            case ccui.Slider.EVENT_PERCENT_CHANGED:
                var percent = sender.getPercent();
                cc.log("百分比： " + percent.toFixed(0)); // 取整输出
                break;
            default:
                break;
        }
    },
    onCheckBoxSelectedEvent: function (sender, type) {
        switch (type) {
            case  ccui.CheckBox.EVENT_UNSELECTED:
                cc.log("复选框没选中");
                break;
            case ccui.CheckBox.EVENT_SELECTED:
                cc.log("复选框选中");
                break;
            default:
                break;
        }
    },
    onButtonTouchEvent: function (sender, type) {
        switch (type) {//触摸类型
            case ccui.Widget.TOUCH_BEGAN: // 触摸[按下]
                cc.log("Touch Down");
                sender.x += 100; // 按钮坐标右移100
                break;
            case ccui.Widget.TOUCH_MOVED: // 触摸[移动]
                cc.log("Touch Move");
                break;
            case ccui.Widget.TOUCH_ENDED: // 触摸[抬起]
                cc.log("Touch Up");
                break;
            case ccui.Widget.TOUCH_CANCELED: // 触摸[取消]
                cc.log("Touch Cancelled");
                break;
            default:
                break;
        }
    }

});