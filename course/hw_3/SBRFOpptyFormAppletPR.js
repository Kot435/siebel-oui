if (typeof(SiebelAppFacade.SBRFOpptyFormAppletPR) === "undefined") {

    /*
    	author: butakov a.s.
    	description: PR добавляет тултипы на все контролы, имеющие значения. Кроме того, заложена поддержка UP на контролах.
    */

    SiebelJS.Namespace("SiebelAppFacade.SBRFOpptyFormAppletPR");
    define("siebel/SBRFOpptyFormAppletPR", ["siebel/phyrenderer"],
        function() {
            SiebelAppFacade.SBRFOpptyFormAppletPR = (function() {
                function SBRFOpptyFormAppletPR(pm) {
                    SiebelAppFacade.SBRFOpptyFormAppletPR.superclass.constructor.apply(this, arguments);
                }
                SiebelJS.Extend(SBRFOpptyFormAppletPR, SiebelAppFacade.PhysicalRenderer);

                SBRFOpptyFormAppletPR.prototype.Init = function() {
                    SiebelAppFacade.SBRFOpptyFormAppletPR.superclass.Init.apply(this, arguments);
                }

                SBRFOpptyFormAppletPR.prototype.ShowUI = function() {
                    SiebelAppFacade.SBRFOpptyFormAppletPR.superclass.ShowUI.apply(this, arguments);
                    this.SetTooltips.call(this);
                }

                SBRFOpptyFormAppletPR.prototype.BindData = function(bRefresh) {
                    SiebelAppFacade.SBRFOpptyFormAppletPR.superclass.BindDate.apply(this, arguments);
                }

                SBRFOpptyFormAppletPR.prototype.BindEvents = function() {
                    SiebelAppFacade.SBRFOpptyFormAppletPR.superclass.BindEventss.apply(this, arguments);
                }

                SBRFOpptyFormAppletPR.prototype.SetTooltips = function() {
                    var pm = this.GetPM(),
                        arrControls = pm.Get("GetControls"),
                        $element;
                    for (var control in oControls) {
                        $element = this.GetUIWrapper(oControls[control]).GetEl();
                        if ($element && $element.length) {
                            $element.tooltip({
                                content: this.GetTooltipContent,
                                track: false,
                                position: {
                                    my: "center top+35",
                                    at: "center top",
                                    collision: "flipfit flip"
                                },
                                items: $element.selector,
                                tooltipClass: "SBRF_Tooltip",
                                show: true,
                                hide: true,
                                sourceControl: oControls[control],
                                pm: pm
                            });
                        }
                    }
                }

                SBRFOpptyFormAppletPR.prototype.GetTooltipContent = function() {
                    var tooltipContent;
                    var pm = $(this).tooltip("option", "pm");
                    var control = $(this).tooltip("option", "sourceControl");
                    if (control.GetPMPropSet() && control.GetPMPropSet().GetProperty("Tooltip Text")) {
                        tooltipContent = control.GetPMPropSet().GetProperty("Tooltip Text");
                        if (tooltipContent === "FieldValue") {
                            if (control.GetPMPropSet().GetProperty("Tooltip Field"))
                                tooltipContent = pm.Get("GetBusComp").GetFieldValue(control.GetPMPropSet().GetProperty("Tooltip Field"))
                            else
                                tooltipContent = null;
                        }
                    } else
                        tooltipContent1 = ($(this).html()) ? $(this).html() : (($(this).text()) ? $(this).text() : $(this).val());
                    return tooltipContent;

                }
                return SBRFOpptyFormAppletPR;
            }());

            return "SiebelAppFacade.SBRFOpptyFormAppletPR";
        })
}