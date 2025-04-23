const express = require("express"); // Importujemy framework Express
const app = express(); // Tworzymy nową instancję aplikacji Express

// Middlware globalny - działa przy każdym żadaniu HTTP
app.use((req, res, next) => {
	console.log("Tu dziala middlware globalny");
	next(); // przechodzimy dalej do kolejnego middlawer lub routingu
});

// Middleware Specyficzny (dla wybranych ścieżek) - Sprawdzamy czy uzytkownik ma dostep do admina opcji
// najpierw tworzymy funkcję która sprawdza dostęp do strefy admina
function check(req, res, next) {
	console.log("Tu dziala middlware specyficzny: Sprawdzamy dostep Admina");
	const auth = false; // aby uzyskac dostep mozemy zmienic na true
	if (auth) {
		next(); // jeśli uzytkownik ma dostęp idziemy po prostu dalej
	} else {
		//403 - Forbidden: czyli blad brak dostepu
		res.status(403).send("Brak dostepu");
	}
}

// uruchamiamy nasze sprawdzanie dostepu dla sziezki "/admin" czyli tworzymy nasz middleware
// który działa tylko na ścieżce "/admin"
app.use("/admin", check);

// Routing dla Strony Głównej
app.get("/", (req, res) => {
	res.send("Jestes na stronie glownej!");
});

// Routing dla Strony Admina
// pamiętaj że middleware "check" wykona sie zanim dojdzemy tutaj!
app.get("/admin", (req, res) => {
	res.send("Witaj na stronie admina!");
});

// Routing dla błędu - celowo generujemy błąd aby przetestowac Middleware Błędu
app.get("/blad", (req, res) => {
	throw new Error("Cos poszlo nie tak!!!"); // tu właśnie rzucamy błąd celowo
});

// MIDDLEWARE DO OBSŁUGI BŁĘDÓW
// Ten kod działa tylko wtedy, gdy wystąpi błąd (np. throw new Error())
// Express automatycznie przekazuje tu błędy z innych tras i middleware
// Musi mieć 4 argumenty: (err, req, res, next)
// Jeśli Express widzi middleware z err jako pierwszym argumentem, traktuje je jako obsługę błędów.
// To taki "ostatni ratunek" w aplikacji – działa jak straż pożarna, która odpala się tylko,
// gdy coś się zepsuje.
app.use((err, req, res, next) => {
	console.log("Blad: ", err.message);
	res.status(500).send("Wewnetrzny blad serwera!");
});

// Uruchamiamy Server Express na porcie 5000
app.listen(5000, () => {
	console.log("Serwer dziala na porcie 5000!");
});
