// 1. Perhatikan code berikut!
/*
    let liga1 = ["Persib", "Persija", "Bali United"]
    liga1[50] = "PSM"
    console.log(liga1.length)
    console.log(liga1.indexOf("PSM"))
*/
// Hasil yang tepat dari kedua console.log diatas adalah?
//      a. 51 & 51
//      x 51 & 50
//      c. 49 & 50
//      d. 50 & 49












// 2. Syntax manakah yang merupakan ternary operator?
//      a. 1 => 2? return true : return false 
//      b. 10 = 10? console.log("true") : console.log("false")
//      c. "ABC" !== "abc"? return 1 :: return 0
//      x 100 < 101? true : false 



// 3. Perhatikan program berikut!
/*
    hasilKali(5)
    function hasilKali(num){
        console.log(10 * 100)
    }
    hasilBagi()
    let hasilBagi = function(num){
        return num % num
    }
*/
// Apa yang akan terjadi apabila program diatas dijalankan?
//      a. Function hasilKali error, karena tidak menggunakan parameter num 
//      b. return num undefined, karena tidak menerima argument
//      x Function hasilBagi error, karena di call sebelum di declare 
//      d. console.log hasilKali undefined, karena tidak menggunakan parameter num



// 4. Perhatikan code berikut!
/*
    let point = '100'
    point+1 // Tidak merubah apapun
    point++ // 101
    point++ // 102
    point-- // 101
    point = point + '1' // 1011
*/
// Hasil console.log(point) yaitu?
//      a. 1021
//      x 1011 
//      c. 103
//      d. 102



// 5. Hasil dari kedua console.log pada program berikut yaitu?
/*
    let dataSiswa = {
        nama: "Aisyah",
        umur: 20
    }
    console.log(dataSiswa.nama)
    console.log(dataSiswa.hobi)
*/
//      a. Aisyah & ReferenceError: property hobi is not defined
//      x Aisyah & Undefined 
//      c. Budi & Null
//      d. Budi & ""



// 6. Hasil dari console di bawah ini yaitu?
/*
    let cars = ["Honda", "Toyota", "Wuling"]
    console.log(...cars)
*/
//      x Honda Toyota Wuling 
//      b. ["Honda", "Toyota", "Wuling"]
//      c. Honda, Toyota, Wuling
//      d. "Honda, Toyota, Wuling"



// 7. Perhatikan code di bawah ini!
/*
    let dataToSend = ["Haekal", 20, "FE Dev", 1995]
    function printLn(a, b, c){
        console.log(`
            Saya ${a}, 
            Umur ${b},
            Saya sebagai ${c}.
        `)
    }
    printLn(...dataToSend)
*/
// Hasil program diatas akan menghasilkan?
//      x Saya Haekal, Umur 20, Saya sebagai FE Dev. 
//      b. TypeError: Found non-callable @@iterator
//      c. TypeError: Assignment to constant variable.
//      d. ReferenceError: dataToSend not iterrable



// 8. Pernyataan yang tepat mengenai synchronous yaitu?
//      a. Untuk menjalankan baris code secara parallel
//      b. Untuk menjalankan tugas yang mungkin memerlukan waktu tanpa harus memblokir tugas berikutnya
//      c. Untuk menjalankan 1 tugas atau lebih secara bersamaan dalam kurun waktu yang bersamaan
//      x Untuk menjalankan operasi berikutnya setelah operasi sebelumnya selesai dijalankan 



// 9. Perhatikan data array berikut ini:
/*
    let data = [
        true, undefined, [1, 2, [false, ['Lynette', "Wahyu"], 3]], 
        "Patrick", NaN, 100, [3, "Joko", [{school: "Purwadhika"}]], 
        0, -100, `Lucas`, ['Javascript']
    ]
*/
// Untuk mendapatkan "Purwadhika", maka console.log yang tepat yaitu?
//      a. console.log(data[6][3][1].school)
//      x console.log(data[6][2][0].school) 
//      c. console.log(data[6][2][1].object(school))
//      d. Error, karena array tidak dapat menampung tipe data NaN & undefined



// 10. Perhatikan syntax berikut!
/*
    const arr1 = ["-", "---", "-"]
    arr1.push("---")
*/
// Apakah yang akan terjadi apabila program dijalankan?
//      a. TypeError: Assignment to constant variable
//      b. ReferenceError: Cannot access 'arr1' before initialization
//      c. TypeError: Declare before innitialization
//      x Semua Jawaban Salah 



// 11. Perhatikan looping berikut!
/*
    let str = 'Garuda di dadaku!'.split(" ") // [Garuda, di, dadaku!]
    
    for(let i=0; i < str.length; i += 1){
        console.log(str[i])
        str.push(str[i])
    }
*/
// Code tersebut ketika dijalankan ternyata error, apa yang menyebabkan error tersebut?
//      a. Salah syntax pada for loop
//      b. Kondisi step pada for loop tidak bisa i += 1
//      c. String pada variabel str tidak bisa diberi method .split(‘ ‘) secara langsung
//      x Terjadi infinite loop karena str.push(str[i]) 



// 12. Berikut yang termasuk truthy Javascript yaitu?
//      x [] 
//      b. ""
//      c. ``
//      d. NaN



// 13. Berikut ini yang merupakan build in function pada Javascript kecuali?
//      a. toLocaleString()
//      b. constructor()
//      c. toFixed()
//      x new Date() 



// 14. Hasil dari console.log pada program berikut adalah?
/*
    let number = 10
    let number = 100
    console.log(number)
*/
//      a. 100
//      b. 10
//      c. TypeError: Assignment to constant variable
//      x SyntaxError: Identifier number has already been declared 



// 15. Jika ingin menjalankan program javascript pada file html, maka tag element yang digunakan adalah?
//      a. <html></html>
//      b. <jscript></jscript>
//      x <script></script> 
//      d. <code></code>



// 16. Dibawah ini manakah penamaan variable yang paling tepat?
//      a. function
//      b. 10people_
//      c. people-name
//      d. People!



// 17.Dibawah ini manakah variable yang menghasilkan value undefined apabila variable tersebut di akses terlebih dahulu sebelum didefine?
//      x. var 
//      b. let
//      c. const
//      d. Semua jawaban benar



// 18. Manakah operator yang menghasilkan Boolean bernilai true, apabila komparasi kedua data memiliki value yang berbeda?
//      x !== (10 !== 20)  true
//      b. === (10 === 20) false
//      c. == (10 == 20) false
//      d. && (10 && 20) 20



// 19. Program di bawah ini akan dijalankan sebanyak berapa kali?
/*
    let point = 10
    function A(){
        point += 5
        return(point)
        c()
    }
    let b = (newPoint) => {
        point += newPoint 
    }
    let c = function(){
        console.log("Hello, World!")
        A()
    }
    console.log(A())
*/
//      x 1x
//      b. 2x
//      c. Infinite
//      d. Tidak running



// 20. Hasil dari console.log pada looping berikut adalah?
/*
    for(let i=10; i>=0; i--){
        if(i%2 === 0 || i !== 0){
            console.log(i) // 10 9 8 7 6 5 4 3 2 1 0
        }
    }
*/
//      a. 10 9 8 7 6 5 4 3 2 1 0
//      b. 10, 8, 6, 4, 2
//      c. 9, 7, 5, 3, 2, 1
//      d. 7, 5, 3, 2, 1
