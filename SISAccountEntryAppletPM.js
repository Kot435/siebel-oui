if (typeof(SiebelAppFacade.SISAccountEntryAppletPM) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SISAccountEntryAppletPM");
    define("siebel/custom/SISAccountEntryAppletPM", ["siebel/pmodel"],
        function () {
            SiebelAppFacade.SISAccountEntryAppletPM = (function () {

                function SISAccountEntryAppletPM(pm) {
                    SiebelAppFacade.SISAccountEntryAppletPM.superclass.constructor.call(this);
                }

                SiebelJS.Extend(SISAccountEntryAppletPM, SiebelAppFacade.PresentationModel);

                SISAccountEntryAppletPM.prototype.Init = function () {
                    SiebelAppFacade.SISAccountEntryAppletPM.superclass.Init.call(this);
                    //this.AddMethod("FieldChange", this.OnFieldChange);
                    //console.log("Its happens!");
                    //SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingPR:      Init method reached.");
                }

                SISAccountEntryAppletPM.prototype.Setup = function (propSet) {
                    SiebelAppFacade.SISAccountEntryAppletPM.superclass.Setup.call(this);
                }

                // -->
                // SISAccountEntryAppletPM.prototype.OnFieldChange = function(control, value) {
                //     //if (control.GetName() == "")
                //     console.log("OnFieldChange!");
                // }
                // <--

                return SISAccountEntryAppletPM;
                }()
            );
            return "SiebelAppFacade.SISAccountEntryAppletPM";
        })
}