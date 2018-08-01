// 1
(() => 
	$("[title='Account Form Applet']").find("[aria-required='true']").css("background-color", "red")
)();

// 2
(() => {
	let applet = $("[title='Account Form Applet']");
	const SPACE = "div .AppletButtons.siebui-applet-buttons";
	const CONTROLS = "div .siebui-applet-content.siebui-collapsible.siebui-collapsible-applet-content";
	
	$("[title='Account Form Applet']")
		.find(".siebui-btn-grp-applet")
		.append( "<button class='siebui-icon-bttns_more'></button>" )
		.click(() => {
				applet.find(SPACE).toggle();
				applet.find(CONTROLS).toggle();
			   });
})();