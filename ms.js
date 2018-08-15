
$(document).ready(function(){
	
	$("#menu").children().eq(1).click(function(){
		$("#sp").html('<img src="https://previews.123rf.com/images/stylephotographs/stylephotographs1303/\
			stylephotographs130300063/18326874-happy-people-doing-further-training-in-academy-course-with-laptop\
			-computer.jpg" style="position: relative;width: 99.75%; height: 570px; top:95px; bottom: 0;opacity: 0.9; border:3px solid black">');
		$("#head").text("About").fadeIn(200);
		$("#cont").css("border","2px solid black");
		$("#cont").html('Microsoft Corporation is an American \
		multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, \
		supports and sells computer software, consumer electronics, personal computers, and related services. Its best \
		known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the \
		Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the \
		Microsoft Surface lineup of touchscreen personal computers. As of 2016, it is the world\'s largest software maker \
		by revenue, and one of the world\'s most valuable companies. The word "Microsoft" is a portmanteau of \
		"microcomputer" and "software".<br><br>\
		Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for \
		the Altair 8800. It rose to dominate the personal computer operating system market with MS-DOS in the mid-1980s, \
		followed by Microsoft Windows. The company\'s 1986 initial public offering (IPO), and subsequent rise in its share \
		price, created three billionaires and an estimated 12,000 millionaires among Microsoft employees. Since the 1990s, \
		it has increasingly diversified from the operating system market and has made a number of corporate acquisitions, \
		their largest being the acquisition of LinkedIn for $26.2 billion in December 2016,[8] followed by their acquisition \
		of Skype Technologies for $8.5 billion in May 2011.<br><br>\
		As of 2015, Microsoft is market-dominant in the IBM PC-compatible operating system market and the office \
		software suite market, although it has lost the majority of the overall operating system market to Android. \
		The company also produces a wide range of other consumer and enterprise software for desktops and servers, \
		including Internet search (with Bing), the digital services market (through MSN), mixed reality (HoloLens), \
		cloud computing (Azure) and software development (Visual Studio).');
		$("#img").html("");
	});

	$("#menu").children().eq(0).click(function(){
		$("#sp").html("");
		$("#head").text("Home");
		$("#cont").text('Check out these available features:-');
		$("#img").html('<div id="imsec">\
		<img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2mupw?ver=8a53&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true">\
		<span>Surface Pro</span>\
		</div>&nbsp&nbsp&nbsp&nbsp&nbsp\
		\
		<div id="imsec">\
		<img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1uWfh?ver=0868&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true">\
		<span>Xbox One S</span>\
		</div>\
		&nbsp&nbsp&nbsp&nbsp&nbsp\
		\
		<div id="imsec">\
		<img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Zh0S?ver=72f1&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true">\
		<span>Windows 10 Update</span>\
		</div>\
		&nbsp&nbsp&nbsp&nbsp&nbsp\
		\
		<div id="imsec">\
		<img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/REQzDg?ver=83e1&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true">\
		<span>Outlook</span>\
		</div>\
		&nbsp&nbsp&nbsp&nbsp&nbsp\
		\
		<div id="imsec">\
		<img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1ynyJ?ver=d6b1&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true">\
		<span>Visual Studio 2017</span>\
		</div>\
		&nbsp&nbsp&nbsp&nbsp&nbsp\
		\
		<div id="imsec">\
		<img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1LJdE?ver=f866&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true">\
		<span>Microsoft Azure</span>\
		</div>');
	});

	$("#menu").children().eq(2).click(function(){
		$("#sp").html("");
		$("#head").text("Services");
		$("#cont").html("<ul style='float:left'><li>Software</li><ul><li>Windows Apps</li><li>One Drive</li><li>Outlook</li><li>Skype</li>\
			<li>One Note</li></ul><br>\
			<li>PCs & Devices</li><ul><li>PCs & Tablets</li><li>Accessories</li></ul><br>\
			<li>Entertainment</li><ul><li>Xbox games</li><li>PC games</li><li>Windows digital games</li></ul><br>\
			<li>Business</li><ul><li>Microsoft Azure</li><li>Microsoft Dynamics 365</li><li>Microsoft 365</li><li>Cloud Platform</li></ul>\
			<br><li>Developer and IT</li><ul><li>.NET</li><li>Visual Studio</li><li>Windows Dev center</li><li>Docs</li></ul></ul>\
			");

			$("#img").html("");
		});

	$("#ext").click(function(){
		$("#contact").animate({
			width:"toggle"
		},1000);

		if($("#ext").html()=="Contact<br>&lt&lt"){
			$("#ext").html("Contact<br>&gt&gt");
		}else if($("#ext").html()=="Contact<br>&gt&gt"){
			$("#ext").html("Contact<br>&lt&lt");
		}
	});

});
