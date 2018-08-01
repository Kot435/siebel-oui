if (typeof(SiebelAppFacade.SISAccountEntryAppletPM) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SISAccountEntryAppletPM");
    define("siebel/custom/SISAccountEntryAppletPM", ["siebel/pmodel"],
        function() {
            SiebelAppFacade.SISAccountEntryAppletPM = (function() {

                function SISAccountEntryAppletPM(pm) {
                    SiebelAppFacade.SISAccountEntryAppletPM.superclass.constructor.apply(this, arguments);
                }

                SiebelJS.Extend(SISAccountEntryAppletPM, SiebelAppFacade.PresentationModel);

                SISAccountEntryAppletPM.prototype.Init = function() {
                    SiebelAppFacade.SISAccountEntryAppletPM.superclass.Init.apply(this, arguments);
                    this.AddMethod("FieldChange", this.statusCheck, {
                        sequence: false,
                        scope: this
                    });
                    this.AddProperty("statusNotActive", false);
                }

                SISAccountEntryAppletPM.prototype.Setup = function(propSet) {
                    SiebelAppFacade.SISAccountEntryAppletPM.superclass.Setup.apply(this, arguments);
                }

                SISAccountEntryAppletPM.prototype.statusCheck = function(control, value) {
                    if (control.GetFieldName() == "Account Status" && value != "Active") {
                        this.SetProperty("statusNotActive", true);
                    } else {
                        this.SetProperty("statusNotActive", false);
                    }
                }

                return SISAccountEntryAppletPM;
            }());
            return "SiebelAppFacade.SISAccountEntryAppletPM";
        })
}