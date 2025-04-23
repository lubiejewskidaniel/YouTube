# 🧠 Framework czy Biblioteka? - Kod z filmu YouTube

Repozytorium zawiera kod wspierający materiał wideo dostępny pod linkiem:  
🎥 [Czy Express.js to biblioteka, czy framework?](https://youtu.be/lTm0HOuBS5Y?si=nKcJGqCmtogjC_hB)

---

## 📦 Co to za kod?

Jest to prosta aplikacja serwera napisana w Node.js z użyciem **Express.js** – popularnego frameworka do budowania serwerów HTTP w JavaScript.

Projekt pokazuje:

- jak działają middleware (pośrednicy) w Expressie
- jak można ograniczyć dostęp do pewnych ścieżek (autoryzacja)
- jak obsługiwać błędy w aplikacji serwerowej
- różnicę między middleware globalnym, błędów a specyficznym

---

## 🛠 Jak to działa?

Plik `server.js`:

- **Tworzy serwer Express** nasłuchujący na porcie `5000`
- Definiuje **middleware globalny**, który uruchamia się przy każdym żądaniu i loguje komunikat
- Zawiera **middleware specyficzny** dla ścieżki `/admin`, który symuluje sprawdzanie dostępu
- Definiuje 3 trasy:
  - `/` – strona główna
  - `/admin` – strona admina (dostępna tylko przy "auth = true")
  - `/blad` – trasa generująca błąd w celu demonstracji obsługi błędów
- Na końcu znajduje się middleware do **obsługi błędów**, który łapie wszystkie błędy rzucone w aplikacji

---

## 🚀 Jak uruchomić?

1. Upewnij się, że masz zainstalowane [Node.js](https://nodejs.org/)
2. Zainstaluj zależności:

`npm install`

3. Uruchom serwer:

`node server.js`

4. Wejdź w przeglądarkę na:
   - `http://localhost:5000/` → strona główna
   - `http://localhost:5000/admin` → strona admina (z kontrolą dostępu)
   - `http://localhost:5000/blad` → test błędów

---

## 🧪 Przykład wideo

Całość tłumaczenia i działania kodu możesz obejrzeć na YouTube:  
📺 [Zobacz film](https://youtu.be/lTm0HOuBS5Y?si=nKcJGqCmtogjC_hB)

---

## 📁 Pliki

- `server.js` – główny plik aplikacji
- `package.json` – definicja zależności i metadanych projektu
- `package-lock.json` – dokładne wersje zależności (automatycznie generowany)

---

## 📚 Słowniczek

- **Middleware** – funkcje, które mają dostęp do żądania (request) i odpowiedzi (response) zanim dotrą do celu
- **Routing** – definiowanie, co aplikacja powinna zrobić po otrzymaniu konkretnego żądania
- **Error Handling** – mechanizmy przechwytywania i reagowania na błędy

---

## ✅ Licencja

Ten projekt jest dostępny na licencji ISC.

> ⚠️ **Uwaga dotycząca licencji ISC**
>
> Korzystając z tego kodu, pamiętaj:
>
> - Musisz **zachować oryginalne informacje o autorze** i **dołączyć treść licencji** ISC.
> - Autor **nie ponosi odpowiedzialności** za jakiekolwiek szkody wynikające z używania tego kodu.
> - Nie jesteś zobowiązany do udostępniania swoich zmian – możesz używać i modyfikować ten kod również w projektach komercyjnych, bez dzielenia się nimi z innymi.
