if (typeof(SiebelAppFacade.SISAccountListAppletPR) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SISAccountListAppletPR");
    define("siebel/custom/SISAccountListAppletPR", ["siebel/jqgridrenderer"],
        function() {
            SiebelAppFacade.SISAccountListAppletPR = (function() {

                function SISAccountListAppletPR(pm) {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.constructor.apply(this, arguments);
                }

                SiebelJS.Extend(SISAccountListAppletPR, SiebelAppFacade.JQGridRenderer);

                SISAccountListAppletPR.prototype.Init = function() {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.Init.apply(this, arguments);
                }

                SISAccountListAppletPR.prototype.ShowUI = function() {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.ShowUI.apply(this, arguments);
                    console.log("ShowUI from SIS Account List Applet");
                }

                SISAccountListAppletPR.prototype.BindData = function(bRefresh) {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.BindData.apply(this, arguments);
                }

                SISAccountListAppletPR.prototype.BindEvents = function() {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.BindEvents.apply(this, arguments);
                }

                SISAccountListAppletPR.prototype.EndLife = function() {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.EndLife.apply(this, arguments);
                }

                return SISAccountListAppletPR;
            }());
            return "SiebelAppFacade.SISAccountListAppletPR";
        })
}