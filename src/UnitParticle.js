/**
 * 作者:penny
 *
 */

//新建场景
var Unit_Particle = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new ParticleLayer();
        this.addChild(layer);
    }
});

var ParticleLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        var particleLayer = new cc.ParticleSystem(res.u9_fire_plist);
        this.addChild(particleLayer);
        particleLayer.setPosition(cc.winSize.width / 2);
    }
});