if (typeof(SiebelAppFacade.SISAccountListAppletPM) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SISAccountListAppletPM");
    define("siebel/custom/course/hw_3/SISAccountListAppletPM", ["siebel/listpmodel"],
        function() {
            SiebelAppFacade.SISAccountListAppletPM = (function() {

                function SISAccountListAppletPM(pm) {
                    SiebelAppFacade.SISAccountListAppletPM.superclass.constructor.apply(this, arguments);
                }

                SiebelJS.Extend(SISAccountListAppletPM, SiebelAppFacade.ListPresentationModel);

                SISAccountListAppletPM.prototype.Init = function() {
                    SiebelAppFacade.SISAccountListAppletPM.superclass.Init.apply(this, arguments);
                    // this.AddProperty("accWarning", "");
                    this.AddProperty("accState", this.Get("GetBusComp").GetFieldValue("Account Status"));
                    this.AddProperty("accType", this.Get("GetBusComp").GetFieldValue("Type"));
                    this.AddMethod("FieldChange", this.OnFieldChange, {
                        sequence: false,
                        scope: this
                    });
                }

                SISAccountListAppletPM.prototype.OnFieldChange = function(control, value) {
                    var fieldName = control.GetName();
                    if (fieldName == "Account Status") {
                        this.SetProperty("accState", value);
                    }
                    if (fieldName == "Type") {
                      this.SetProperty("accType", value);
                    }
                }

                return SISAccountListAppletPM;
            }());
            return "SiebelAppFacade.SISAccountListAppletPM";
        })
}