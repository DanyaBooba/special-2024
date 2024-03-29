function RandomInteger(max) {
	return Math.floor(Math.random() * (max - 1));
}

function RightBarUrl(data) {
	let url = new URL(data);
	return url.pathname;
}

function RightHTML(block) {
	return (
		`<div class="col post">
            <a href="` +
		RightBarUrl(block["link"]) +
		`/" class="card">
                <img src="` +
		RightBarUrl(block["link"]) +
		`/cap@min.jpg" class="card-img" alt="` +
		block["title"] +
		`">
                <div class="card-img-overlay">
                    <div class="post-mini">
                        <p>
                            ` +
		block["class"] +
		`
                        </p>
                        <h4>
                            ` +
		block["title"] +
		`
                        </h4>
                    </div>
                </div>
            </a>
            </div>`
	);
}

$.getJSON("/js/pages.json", function (data) {
	var pages = data;

	if (document.getElementById("archivetrue") !== null) return;

	var content = document.getElementById("post--right");

	var name = document.getElementsByTagName("H1")[0].textContent;

	if (content == null) return;

	var cont = true;
	var contid = 0;

	var len = document.getElementById("post--main").innerHTML.length;

	var count = parseInt(len / 1000 - 1);

	if (count < 0) count = 0;

	if (count > pages.length) count = pages.length;

	if (count > 3) count = 3;

	while (cont) {
		if (pages.length <= 0 || contid >= count) {
			cont = false;
			break;
		}

		var index = RandomInteger(pages.length);

		var block = pages[index];

		pages.splice(index, 1);

		if (name === block["name"]) continue;

		contid += 1;

		content.insertAdjacentHTML("beforeend", RightHTML(block));
	}
});
