/**
 * 作者:penny
 *数据存储
 */

var DataSencen = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new DataLayer();
        this.addChild(layer);
    }
});


// ==================================================================
// -----------------------  数据存储  --------------------------
// ==================================================================

var DataLayer = cc.Layer.extend({
    configJson: null,
    configPlist: null,
    ctor: function () {
        this._super();

        // 加载[storage示例]
        this.loadLocalStorageTest();
        // 加载[json示例]
        this.loadJsonTest();
        // 加载[plist示例]
        this.loadPlistTest();
    },
    loadLocalStorageTest: function () {
        var key, value;
        cc.sys.localStorage.setItem(key, value);
        cc.sys.localStorage.getItem(key);
        cc.sys.localStorage.removeItem(key);
        cc.sys.localStorage.clear();

        cc.sys.localStorage.setItem("penny", "shuai");
        var value = cc.sys.localStorage.getItem("penny");
        cc.log(value); //shuai

        cc.log(cc.sys.localStorage);//  Storage {penny: "shuai", length: 1}

        cc.sys.localStorage.removeItem("penny");
        cc.sys.localStorage.clear();

        cc.log(cc.sys.localStorage); ////  Storage {penny: "shuai", length: 1}

    },
    loadJsonTest: function () {
        cc.log("-------------------[json]-------------------");
        var jsonArray = [
            "res/unit08_data/config.json"
        ];
        // 加载json文件，可以批量加载，读取出来的数据保存在results数组中
        cc.loader.load(jsonArray, function (err, results) {
            if (err) {
                cc.error("Failed to load %s, %s .", jsonArray);
            }
            cc.log(results);        // 打印[所有加载结果]
            cc.log(results[0]);     // 打印[读取的第一个json]
        });
        cc.log("-------------------[json]-------------------");

    },
    loadPlistTest: function () {
        cc.log("-------------------[plist start]-------------------");
        var plistArray = [
            "res/unit08_data/config.plist"
        ];
        // 加载plist文件，可以批量加载，读取出来的数据保存在results数组中
        cc.loader.load(plistArray, function (err, results) {
            if(err){
                cc.error("Failed to load %s, %s .", plistArray);
            }
           cc.log(results);
           cc.log(results[0]);

        });


        cc.log("-------------------[plist end]-------------------");
    }
});
