Eftersom att sidan inte får använda sig utav en lokal webbserver och måste kunna köras genom att dubbelklicka på filerna kan inte `index.html` leva i root.
Detta är eftersom att när man kör filerna genom `file///:` så blir varje submapp en egen session,
vilket i sin tur gör att det blir omöjligt att skapa kontinurligtet för t.ex darkmode om man inte fuskar och använder något sjukt, som `window.name`.

Därför är denna projektstruktur ooptimal och innehåller `index.html` i `/pages/`
