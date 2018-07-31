if (typeof(SiebelAppFacade.SISAccountEntryAppletPM) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SISAccountEntryAppletPM");
    define("siebel/custom/SISAccountEntryAppletPM", ["siebel/pmodel"],
     function () {
      SiebelAppFacade.SISAccountEntryAppletPM = (function () {
   
       function SISAccountEntryAppletPM(pm) {
        SiebelAppFacade.SISAccountEntryAppletPM.superclass.constructor.apply(this, arguments);
       }
   
       SiebelJS.Extend(SISAccountEntryAppletPM, SiebelAppFacade.PresentationModel);
   
       SISAccountEntryAppletPM.prototype.Init = function () {
        SiebelAppFacade.SISAccountEntryAppletPM.superclass.Init.apply(this, arguments);
        this.AddMethod("FieldChange", this.statusCheck, { sequence: false, scope: this });
       }
   
       SISAccountEntryAppletPM.prototype.Setup = function (propSet) {
        console.log(this.Get("GetName")+": SISAccountEntryAppletPM:      Setup method reached.");
        SiebelAppFacade.SISAccountEntryAppletPM.superclass.Setup.apply(this, arguments);
       }

       SISAccountEntryAppletPM.prototype.statusCheck = (control, value) => {
           if (control.GetFieldName() == "Account Status" && value != "Active") {
               alert("Warning! Client status is not active!");
           }
       }
   
       return SISAccountEntryAppletPM;
      }()
     );
     return "SiebelAppFacade.SISAccountEntryAppletPM";
    })
   }