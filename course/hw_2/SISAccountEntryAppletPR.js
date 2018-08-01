if (typeof(SiebelAppFacade.SISAccountEntryAppletPR) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SISAccountEntryAppletPR");
    define("siebel/custom/SISAccountEntryAppletPR", ["siebel/phyrenderer"],
        function() {
            SiebelAppFacade.SISAccountEntryAppletPR = (function() {

                function SISAccountEntryAppletPR(pm) {
                    SiebelAppFacade.SISAccountEntryAppletPR.superclass.constructor.apply(this, arguments);
                }

                SiebelJS.Extend(SISAccountEntryAppletPR, SiebelAppFacade.PhysicalRenderer);

                SISAccountEntryAppletPR.prototype.Init = function() {
                    SiebelAppFacade.SISAccountEntryAppletPR.superclass.Init.apply(this, arguments);
                    this.AttachPMBinding("statusNotActive", this.notifyUser);
                }

                SISAccountEntryAppletPR.prototype.BindData = function(bRefresh) {
                    SiebelAppFacade.SISAccountEntryAppletPR.superclass.BindData.apply(this, arguments);

                    // вопрос почему немогу подключить свой метод через this?
                    (() => {
                        let PM = this.GetPM(),
                            controls = PM.Get("GetControls");
                        for (controlKey in controls) {
                            if (controls[controlKey].GetFieldName() == "Location") {
                                let locationctr = controls[controlKey],
                                    fieldVal = PM.ExecuteMethod("GetFieldValue", locationctr),
                                    htmlName = locationctr.GetInputName();
                                if (fieldVal == "") {
                                    $("[name='" + htmlName + "']").parent().css({
                                        "background-color": "red"
                                    });
                                }
                            }
                        }
                    })();
                }

                SISAccountEntryAppletPR.prototype.notifyUser = function() {
                    let PM = this.GetPM(),
                        secureStatus = PM.Get("statusNotActive"),
                        controls = PM.Get("GetControls");
                    for (controlKey in controls) {
                        if (controls[controlKey].GetFieldName() == "Account Status") {
                            if (secureStatus == true && $("#customWarning").length == 0) {
                                $("[title='Account Form Applet']").find("div .siebui-applet-header")
                                    .append("<span id='customWarning'>Warning! Client status is not active!</span>")
                                    .css({
                                        "color": "#ff0000",
                                        "font-weight": "bold",
                                        "font-style": "italic",
                                        "font-size": "23px"
                                    });
                            } else {
                                $("#customWarning").remove();
                            }
                        }
                    }
                }

                return SISAccountEntryAppletPR;
            }());
            return "SiebelAppFacade.SISAccountEntryAppletPR";
        })
}