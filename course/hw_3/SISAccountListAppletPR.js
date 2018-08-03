/*Подсветить столбец Name в лист-апплете
SIS Account List Applet для тех записей, у которых Account <>'Customer' и Status ='Active'*/

if (typeof(SiebelAppFacade.SISAccountListAppletPR) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SISAccountListAppletPR");
    define("siebel/custom/course/hw_3/SISAccountListAppletPR", ["siebel/jqgridrenderer"],
        function() {
            SiebelAppFacade.SISAccountListAppletPR = (function() {

                function SISAccountListAppletPR(pm) {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.constructor.apply(this, arguments);
                }

                SiebelJS.Extend(SISAccountListAppletPR, SiebelAppFacade.JQGridRenderer);

                SISAccountListAppletPR.prototype.Init = function() {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.Init.apply(this, arguments);
                }

                SISAccountListAppletPR.prototype.BindData = function(bRefresh) {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.BindData.apply(this, arguments);

                    this.onFieldChangeHandler();
                }

                SISAccountListAppletPR.prototype.onFieldChangeHandler = function() {

                    console.log(`accState = ${this.GetPM().Get("accState")}`);
                    console.log(`accType = ${this.GetPM().Get("accType")}`);

                    this.GetPM().Get("GetRecordSet").forEach((rowNum, index) => {
                        // if (this.GetPM().Get("accState") == "Active" && this.GetPM().Get("accType") != "Customer") {
                        if (rowNum["Account Status"] == 'Active' && rowNum["Type"] != 'Customer') {
                                $("#"+this.GetPM().Get("GetPlaceholder"))
                                    .find("tr[id="+(Number(index)+1)+"]")
                                    .find(`td[id*=${this.GetPM().Get("GetPlaceholder")}_Name]`)
                                    .css("background-color", "red")
                        }
                    });
                }

                return SISAccountListAppletPR;
            }());
            return "SiebelAppFacade.SISAccountListAppletPR";
        })
}