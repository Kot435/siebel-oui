if (typeof(SiebelAppFacade.SISAccountEntryAppletPR) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SISAccountEntryAppletPR");
    define("siebel/custom/SISAccountEntryAppletPR", ["siebel/phyrenderer"],
     function () {
      SiebelAppFacade.SISAccountEntryAppletPR = (function () {
   
       function SISAccountEntryAppletPR(pm) {
        SiebelAppFacade.SISAccountEntryAppletPR.superclass.constructor.apply(this, arguments);
       }
   
       SiebelJS.Extend(SISAccountEntryAppletPR, SiebelAppFacade.PhysicalRenderer);
   
       SISAccountEntryAppletPR.prototype.BindData = function (bRefresh) {
        SiebelAppFacade.SISAccountEntryAppletPR.superclass.BindData.apply(this, arguments);
        // вопрос почему немогу подключить свой метод через this?
        var PM = this.GetPM();
        var controls = PM.Get("GetControls");
        for (controlKey in controls) {
            if ( controls[controlKey].GetFieldName() == "Location") {
                var securityControl = controls[controlKey];
                var fieldVal = PM.ExecuteMethod("GetFieldValue",securityControl);
                var htmlName = securityControl.GetInputName();
                if (fieldVal == "")  { 
                    $("[name='"+htmlName+"']").parent().css( {"background-color":"red"});
                }
            }
        }
       }
       
       return SISAccountEntryAppletPR;
      }()
     );
     return "SiebelAppFacade.SISAccountEntryAppletPR";
    })
   }