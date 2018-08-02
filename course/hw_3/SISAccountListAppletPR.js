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

                    // this.GetPM().AddProperty("accWarning", (this.GetPM().Get("GetBusComp").GetFieldValue("Account Status") == "Active" && this.GetPM().Get("GetBusComp").GetFieldValue("Type") != "Customer") ? true : false);
                    this.GetPM().AddProperty("accWarning", "N");
                    this.GetPM().AddMethod("FieldChange", this.OnFieldChange, { sequence: false, scope: this });
                    this.AttachPMBinding("accWarning", this.onFieldChangeHandler);
                }

                SISAccountListAppletPR.prototype.BindData = function(bRefresh) {
                    SiebelAppFacade.SISAccountListAppletPR.superclass.BindData.apply(this, arguments);

                    this.GetPM().Get("GetRecordSet").forEach((rowNum, index) => {
                        if (this.GetPM().Get("accWarning") == "Y") {
                        // if (rowNum["Account Status"] == 'Active' && rowNum["Type"] != 'Customer') {
                                $("#"+this.GetPM().Get("GetPlaceholder"))
                                    .find("tr[id="+(Number(index)+1)+"]")
                                    .find(`td[id*=${this.GetPM().Get("GetPlaceholder")}_Name]`)
                                    .css("background-color", "red")
                        }
                    });
                }

                SISAccountListAppletPR.prototype.OnFieldChange = function(control, value) {
                    console.log("Field change!!!!!!!!!!!!!!!!!");
                    if ((control.GetName() == "Action Status" && value == "Active") || (control.GetName() == "Type" && value != "Customer")) {
                        this.GetPM().SetProperty("accWarning", (this.GetPM().Get("GetBusComp").GetFieldValue("Account Status") == "Active" && this.GetPM().Get("GetBusComp").GetFieldValue("Type") != "Customer") ? "Y" : "N")
                        console.log(`IN IF ${this.GetPM('accWarning') == "Y"}`)
                    }
                }

                SISAccountListAppletPR.prototype.onFieldChangeHandler = function() {
                    this.GetPM().Get("GetRecordSet").forEach((rowNum, index) => {
                        if (this.GetPM().Get("accWarning") == "Y") {
                        // if (rowNum["Account Status"] == 'Active' && rowNum["Type"] != 'Customer') {
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