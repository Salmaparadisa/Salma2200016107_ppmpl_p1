import * as chai from "chai";
import { tambah, kali, kurang, bagi } from "./math.js"; // Pastikan menggunakan .js di akhir

const expect = chai.expect;

describe("Pengujian Fungsi Matematika", function () {
  it("seharusnya mengembalikan 10 saat menambahkan 5 + 5", function () {
    expect(tambah(5, 5)).to.equal(10);
  });

  it("seharusnya mengembalikan 15 saat mengalikan 5 * 3", function () {
    expect(kali(5, 3)).to.equal(15);
  });

  it("seharusnya mengembalikan 4 saat mengurangkan 10 - 6", function () {
    expect(kurang(10, 6)).to.equal(4);
  });

  it("seharusnya mengembalikan 5 saat membagi 25 / 5", function () {
    expect(bagi(25, 5)).to.equal(5);
  });

  it("seharusnya mengembalikan error saat membagi dengan 0", function () {
    expect(() => bagi(12, 0)).to.throw("Tidak bisa membagi dengan nol");
  });

  it("seharusnya mengembalikan -12 saat melakukan pengurangan -9 - 3", function () {
    expect(kurang(-9, 3)).to.equal(-12);
  });

  it("seharusnya mengembalikan error saat menambahkan string", function () {
    expect(() => tambah(7, "string")).to.throw("Input harus berupa angka");
  });

  it("seharusnya mengembalikan error saat mengalikan dengan null", function () {
    expect(() => kali(4, null)).to.throw("Input harus berupa angka");
  });

  it("seharusnya mengembalikan error saat menambahkan string", function () {
    expect(() => tambah(8, "string")).to.throw("Input harus berupa angka");
  });

  it("seharusnya mengembalikan error saat mengalikan dengan null", function () {
    expect(() => kali(6, null)).to.throw("Input harus berupa angka");
  });
});
