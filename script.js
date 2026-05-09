// أجيب العناصر من الصفحة
const btnAdd = document.getElementById("btn-add");
const inputTitle = document.getElementById("input-title");
const inputPages = document.getElementById("input-pages");
const btnUpdate = document.getElementById("btn-update");
const inputCurrentPage = document.getElementById("input-current-page");

// عدد صفحات الكتاب
let totalPages = 0;

// لما أضغط زر الإضافة
btnAdd.addEventListener("click", function () {
  const bookTitle = inputTitle.value;
  const bookPages = inputPages.value;

  if (bookTitle === "" || bookPages === "") {
    alert("أكملي البيانات!");
    return;
  }

  totalPages = parseInt(bookPages);

  document.getElementById("book-title").textContent = bookTitle;
  document.getElementById("book-pages").textContent =
    "0 / " + bookPages + " صفحة";
  document.getElementById("progress-bar").style.width = "0%";
  document.getElementById("progress-percent").textContent = "0%";

  inputTitle.value = "";
  inputPages.value = "";
});

// لما أضغط زر التحديث
btnUpdate.addEventListener("click", function () {
  const currentPage = parseInt(inputCurrentPage.value);

  if (isNaN(currentPage)) {
    alert("أدخلي رقم الصفحة!");
    return;
  }

  if (currentPage > totalPages) {
    alert("الصفحة أكبر من عدد صفحات الكتاب!");
    return;
  }

  // أحسب النسبة المئوية
  const percent = Math.round((currentPage / totalPages) * 100);

  document.getElementById("book-pages").textContent =
    currentPage + " / " + totalPages + " صفحة";
  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("progress-percent").textContent = percent + "%";

  inputCurrentPage.value = "";
});
