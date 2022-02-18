const { test } = QUnit;
const jatek = new Jatek();
let kivalasztottKartya = [];
QUnit.module("Memoria Játék tesztelése", function (h) {
  h.before(() => {
    this.jatek = new Jatek();
  });

  test("létezik e a fügvény", (assert) => {
    assert.ok(this.jatek.kepekTombFeltoltese, "létezik a fügvény");
  });
  test("létezik e ?", function (assert) {
    assert.ok(typeof jatek.kepekTombFeltoltese === "function", "fügvény");
  });

  test("A kepekTomb véletlenszerűen rendezett", function (assert) {
    assert.equal(jatek.kepekTombFeltoltese(kepekTomb, "Math.random()"));
  });

  test("Kártyára kattintásTriger létezik- e? ", function (assert) {
    assert.equal(
      jatek.TriggerBlocked(
        kivalasztottKartya[addEventListener],
        "kartyaKattintas"
      )
    );
  });
  test("TriggerBlocked false állapota? ", function (assert) {
    assert.equal(jatek.TriggerBlocked(false));
  });
  
  test("Kártyára kattintáskor a kivalasztottKartyak tömbbe bekerül-e a kártya?", function (assert) {
    assert.equal(jatek.kepekTombFeltoltese(kartyaTomb,kivalasztottKartya));
  });
  test("Ha két azonos kártya kerül a tömbbe, akkor megváltozik-e a visibility értékük", function (assert) {
    assert.equal(jatek.TriggerBlocked(kivalasztottKartya["visibility"] && this.Jatek.kivalasztottKartya["visibility"] ,"hidden"));
  });
  test("Ha  két kártyára kattintottunk, akkor az összes kártya blokkolva lesz-e? ", function (assert) {
    assert.equal(jatek.TriggerBlocked(kivalasztottKartya[0] && this.Jatek.kivalasztottKartya[1] ,true));
  });
  test("Ha még csak egy kártyára kattintunk, akkor egyik kártya sincs blokkolva? ", function (assert) {
    assert.equal(jatek.TriggerBlocked(kivalasztottKartya[0],false));
  });
});

/*
const JT = new Jatekter();
QUnit.module("Memoria Jatekter tesztelése:", function (h) {
    
  h.before(() => {
    this.JT = new Jatekter();
  });
 

});*/
