var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

/* neu da dang ki admin
var admin = JSON.parse(window.localStorage.getItem("buivananh@gmail.com"));*/
//neu khong
let admin = {
  email: 'buivananh@gmail.com',
  password: '123456',
  fullname: 'Admin',
  orders: [
    {
      code: '1887908',
      date: '19/02/2023',
      priceTotal: 1978000,
      order: [
        { name: 'MONOGRAM CARDIGAN', price: '400000₫', quantity: '1' },
        { name: 'WATER SPLAH HOODIE', price: '380000₫', quantity: '1' },
        { name: 'CONCRETE TIEDYE SWEATER', price: '599000₫', quantity: '2' },
      ],
      infor: {
        fullname: 'Dang Tuyn',
        email: 'supermu727@gmail.com',
        phone: '1243124332',
        location: 'Ha Noi',
      },
    },
    {
      code: '3541085',
      date: '20/02/2023',
      priceTotal: 849000,
      order: [
        { name: 'INHUMAN HOODIE', price: '289000₫', quantity: '1' },
        { name: 'CARREAUX HOODIE', price: '280000₫', quantity: '2' },
      ],
      infor: {
        fullname: 'Van Anh',
        email: 'buivananh01072003@gmail.com',
        phone: '1243124332',
        location: 'Ha Noi',
      },
    },
    {
      code: '8787375',
      date: '20/02/2023',
      priceTotal: 440000,
      order: [
        { name: 'HIGHER-UP PANT', price: '250000₫', quantity: '1' },
        { name: 'ENERGETIC PANT', price: '190000₫', quantity: '1' },
      ],
      infor: {
        fullname: 'Thuy Linh',
        email: 'thuylinh@gmail.com',
        phone: '1243124332',
        location: 'Ha Noi',
      },
    },
    {
      code: '1783780',
      infor: {
        fullname: 'Quynh Chi',
        email: 'quynhchi@gmail.com',
        phone: '031481135335',
        location: 'Hai Phong',
      },
      priceTotal: 576000,
      order: [
        { name: 'LORRYLOAD CARGO SHORT', price: '220000₫', quantity: '1' },
        { name: 'INFERIO SHORT', price: '356000₫', quantity: '1' },
      ],
      date: '20/02/2023',
    },
    {
      code: '8345872',
      date: '20/02/2023',
      priceTotal: 2457000,
      order: [
        { name: 'ENERGETIC PANT', price: '190000₫', quantity: '2' },
        { name: 'RIOT MEO TEE', price: '280000₫', quantity: '1' },
        { name: 'CONCRETE TIEDYE SWEATER', price: '599000₫', quantity: '2' },
        { name: 'MONOGRAM CARDIGAN', price: '400000₫', quantity: '1' },
        { name: 'CLAMOROUS GILE', price: '199000₫', quantity: '1' },
      ],
      infor: {
        fullname: 'Tuan Anh',
        email: 'tuananh@gmail.com',
        phone: '16316855665',
        location: 'Da Nang',
      },
    },
    {
      code: '5211745',
      date: '20/02/2023',
      priceTotal: 380000,
      order: [{ name: 'ENERGETIC PANT', price: '190000₫', quantity: '2' }],
      infor: {
        fullname: 'Van Hieu',
        email: 'vanhieu@gmail.com',
        phone: '63186156186',
        location: 'Ha Tinh',
      },
    },
    {
      code: '5870764',
      date: '20/02/2023',
      priceTotal: 560000,
      order: [{ name: 'CARREAUX HOODIE', price: '280000₫', quantity: '2' }],
      infor: {
        fullname: 'Nguyen Duc',
        email: 'nguyenduc@gmail.com',
        phone: '06168168168',
        location: 'Lang Son',
      },
    },
    {
      code: '3351887',
      date: '20/02/2023',
      priceTotal: 920000,
      order: [
        { name: 'ENERGETIC PANT', price: '200000₫', quantity: '2' },
        { name: 'LEOPARD POLO', price: '260000₫', quantity: '2' },
      ],
      infor: {
        fullname: 'Huy Thang',
        email: 'huythang@gmail.com',
        phone: '0684684864',
        location: 'Quang Ninh',
      },
    },
    {
      code: '7659911',
      date: '21/02/2023',
      priceTotal: 776000,
      order: [
        { name: 'ENERGETIC PANT', price: '200000₫', quantity: '1' },
        { name: 'LORRYLOAD CARGO SHORT', price: '220000₫', quantity: '1' },
        { name: 'INFERIO SHORT', price: '356000₫', quantity: '1' },
      ],
      infor: {
        fullname: 'Phuong Thao',
        email: 'phuongthao@gmail.com',
        phone: '0161616181',
        location: 'Ninh Binh',
      },
    },
  ],
};
var checkAdmin = false;
var checkUser = false;
var customerOrder = {};
customerOrder.code = randomCodeOrders();
function getDate() {
  let curDate = new Date();
  let date = `${curDate.getDate()}/${
    curDate.getMonth() + 1 < 10
      ? '0' + (curDate.getMonth() + 1)
      : curDate.getMonth() + 1
  }/${curDate.getFullYear()}`;
  return date;
}
customerOrder.date = getDate();
document.addEventListener('DOMContentLoaded', function () {
  Validator({
    form: '#form-1',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
      Validator.isRequired('#fullname', 'Vui lòng nhập tên đầy đủ của bạn'),
      Validator.isEmail('#email'),
      Validator.minLength('#password', 6),
      Validator.isRequired('#password_confirmation'),
      Validator.isConfirmed(
        '#password_confirmation',
        function () {
          return document.querySelector('#form-1 #password').value;
        },
        'Mật khẩu nhập lại không chính xác'
      ),
    ],
    onSubmit: function ({ email, password, fullname }) {
      var information = {
        email,
        password,
        fullname,
      };
      if (window.localStorage.getItem(email)) {
        handleErrLogin('#form-1', 1, 'Tài khoản đã tồn tại');
      } else {
        localStorage.setItem(information.email, JSON.stringify(information));
        handleLogin1('#form-1', null, 'Đăng ký thành công');
      }
    },
  });

  Validator({
    form: '#form-2',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [Validator.isEmail('#email'), Validator.minLength('#password', 6)],
    onSubmit: function (data) {
      let getAcount = window.localStorage.getItem(data.email);
      if (getAcount) {
        let nick = JSON.parse(getAcount);
        if (nick.email == 'buivananh@gmail.com') {
          checkAdmin = true;
        } else {
          checkAdmin = false;
        }
        if (nick.email == data.email && nick.password == data.password) {
          handleLogin1('#form-2', nick.fullname, 'Đăng nhập thành công');
          checkUser = true;
        } else
          handleErrLogin('#form-2', 1, 'Tài khoản hoặc mật khẩu không đúng');
      } else handleErrLogin('#form-2', 1, 'Tài khoản hoặc mật khẩu không đúng');
    },
  });
  Validator({
    form: '#form-3',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
      Validator.isRequired('#fullname', 'Vui lòng nhập tên đầy đủ của bạn'),
      Validator.isEmail('#email'),
      Validator.minLength('#password', 10),
      Validator.isRequired('#password_confirmation'),
      Validator.isConfirmed(
        '#password_confirmation',
        function () {
          return document.querySelector('#form-3 #password_confirmation').value;
        },
        ' '
      ),
    ],
    onSubmit: function (data) {
      closeBag();
      handleLogin1('#form-3', null, 'Mua hàng thành công');
      customerOrder.infor = {
        fullname: data.fullname,
        email: data.email,
        phone: data.password,
        location: data.password_confirmation,
      };
      admin.orders.push(customerOrder);
      window.localStorage.setItem('buivananh@gmail.com', JSON.stringify(admin));
      customerOrder = {};
      customerOrder.code = randomCodeOrders();
      customerOrder.infor = {};
      customerOrder.priceTotal = 0;
      customerOrder.order = [];
      customerOrder.date = getDate();
    },
  });
  Validator({
    form: '#form-4',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [],
    onSubmit: function (data) {
      let nameProduct = data.fullname.toUpperCase();
      let quantity = data.email;
      let price = data.password;
      let regExp = /[a-zA-Z]/g;
      if (regExp.test(price)) {
        handleErrLogin('#form-4', 2, 'Giá không bao gồm chữ cái');
      } else {
        if (regExp.test(quantity)) {
          handleErrLogin('#form-4', 1, 'Số lượng không bao gồm chữ cái');
        }
        price = data.password + '₫';
      }
      let dataRoot = JSON.parse(window.localStorage.getItem('data'));
      let checkNameProduct = 0;
      dataRoot.forEach((element) => {
        for (let i = 0; i < element.name.length; i++) {
          if (element.name[i] == nameProduct) {
            element.price[i] = price;
            element.quantity[i] = quantity;
            window.localStorage.setItem('data', JSON.stringify(dataRoot));
            checkNameProduct = 1;
            break;
          }
        }
      });
      if (!checkNameProduct)
        handleErrLogin('#form-4', 0, 'Nhập sai tên sản phẩm');
      else handleLogin1('#form-4', null, 'Cập nhật thành công');
    },
  });
});
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  var selectorRules = {};
  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    var errorMessage;
    // Lấy ra các rules của selector
    var rules = selectorRules[rule.selector];
    // Lặp qua từng rule & kiểm tra
    // Nếu có lỗi thì dừng việc kiểm
    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case 'radio':
        case 'checkbox':
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ':checked')
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add(
        'invalid'
      );
    } else {
      errorElement.innerText = '';
      getParent(inputElement, options.formGroupSelector).classList.remove(
        'invalid'
      );
    }
    return !errorMessage;
  }
  // Lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // Khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var isFormValid = true;
      // Lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });
      if (isFormValid) {
        // Trường hợp submit với javascript
        if (typeof options.onSubmit === 'function') {
          var enableInputs = formElement.querySelectorAll('[name]');
          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            switch (input.type) {
              case 'radio':
                values[input.name] = formElement.querySelector(
                  'input[name="' + input.name + '"]:checked'
                ).value;
                break;
              case 'checkbox':
                if (!input.matches(':checked')) {
                  values[input.name] = '';
                  return values;
                }
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                values[input.name].push(input.value);
                break;
              case 'file':
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
            }

            return values;
          },
          {});
          options.onSubmit(formValues);
        }
        // Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };
    // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        // Xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(options.errorSelector);
          errorElement.innerText = '';
          getParent(inputElement, options.formGroupSelector).classList.remove(
            'invalid'
          );
        };
      });
    });
  }
}
// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || 'Vui lòng nhập trường này';
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || 'Trường này phải là email';
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || 'Giá trị nhập vào không chính xác';
    },
  };
};
//login
function handleLogin(id) {
  $('#overlay').style.display = 'block';
  $('.header-nav').classList.add('unactive');
  var form = $(id);
  form.style.display = 'block';
  var closeForm = form.querySelector('.close-form');
  closeForm.addEventListener('click', () => {
    removeInvalid();
    form.style.display = 'none';
    $('#overlay').style.display = 'none';
    $('.header-nav').classList.remove('unactive');
  });
}
var login = $('.login');
login.addEventListener('click', () => handleLogin('#form-2'));
var regis = $('.item-regis');
regis.addEventListener('click', () => handleLogin('#form-1'));
//xu li nguoi dung dang xuat
var logOut = $('.log-out');
logOut.addEventListener('click', () => {
  let nav = document.querySelector('.header__option--right');
  nav.querySelector('.item-regis').style.display = 'inline-block';
  nav.querySelector('.item-login').classList.remove('unactive');
  nav.querySelector('.item-login span').textContent = 'ĐĂNG NHẬP';
  if (checkAdmin) {
    $('.your-bag').style.display = 'inline-block';
    $('.admin-bag').style.display = 'none';
    $('.container').style.display = 'block';
    $('.list-orders').style.display = 'none';
    $('.report').style.display = 'none';
    let list = $$('.item-order');
    for (var i = 0; i < list.length; i++) {
      $('.item-order').remove();
    }
    $('.notification').style.display = 'none';
    $('.data').style.display = 'none';
    window.localStorage.setItem('buivananh@gmail.com', JSON.stringify(admin));
    $('.figures').innerHTML = '';
  }
  checkAdmin = false;
  checkUser = false;
  removeInvalid();
});
//show error and correct
function showSuccessToast(mess) {
  toast({
    title: 'Thành công!',
    message: mess,
    type: 'success',
    duration: 2000,
  });
}
// remove ivalid
function removeInvalid() {
  $$('.form-group').forEach((form) => {
    let check = 0;
    form.classList.forEach((item) => {
      check = item == 'invalid' ? 1 : 0;
    });
    if (check) {
      form.classList.remove('invalid');
      form.querySelector('input').value = '';
    }
    form.querySelector('.form-message').innerText = '';
  });
}
function showErrorToast(mess) {
  toast({
    title: 'Thất bại!',
    message: mess,
    type: 'error',
    duration: 1200,
  });
}
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
  const main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement('div');
    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest('.toast__close')) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: 'fas fa-check-circle',
      info: 'fas fa-info-circle',
      warning: 'fas fa-exclamation-circle',
      error: 'fas fa-exclamation-circle',
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}
//Xu li sidebar
var back_home = $('.logo-img');
var link_items = $$('.option-clothing-link');
var render_home = $('.container');
var wrapper_product = $('.bottom-product');
function render_product(index, wrapper_product, infor_product) {
  if (wrapper_product.classList.length < 2)
    wrapper_product.classList.add(index);
  else wrapper_product.classList.replace(wrapper_product.classList[1], index);
  console.log(index);
  let quantity_loop = index == 3 ? 4 : 8;
  let f;
  if (index == 3) f = '.jfif';
  else f = '.webp';
  for (var i = 0; i < quantity_loop; i++) {
    var product_add = document.createElement('div');
    product_add.classList.add('product');
    product_add.innerHTML = `
            <img
            src="../assets/img/${index}/img-${i + 1}${f}"
            alt=""
            class="product-img"
          />
          <p class="product-name">${infor_product[index].name[i]}</p>
          <span class="product-price">${infor_product[index].price[i]}</span>
          <i class="fa-sharp fa-solid fa-bag-shopping product-buy-btn"></i>
          <span class="product-quantities">SL: <span>${
            infor_product[index].quantity[i]
          }</span></span>
            `;

    product_add.addEventListener('click', addEventBuyBtn);
    wrapper_product.appendChild(product_add);
  }
}
function removeProductPre(wrapper_product) {
  while (wrapper_product.hasChildNodes()) {
    wrapper_product.removeChild(wrapper_product.firstChild);
  }
}
back_home.addEventListener('click', () => {
  $$('.form').forEach((item) => {
    item.classList.remove('top2');
  });
  render_home.style.display = 'block';
  wrapper_product.style.display = 'none';
  removeProductPre(wrapper_product);
  $('.nav-right').classList.add('top100');
  if (checkAdmin) {
    $('.report').style.display = 'none';
    $('.list-orders').style.display = 'none';
  }
});
link_items.forEach((link_item, index) => {
  link_item.addEventListener('click', () => {
    var infor_product = JSON.parse(window.localStorage.getItem('data'));
    render_home.style.display = 'none';
    render_product(index, wrapper_product, infor_product);
    wrapper_product.style.display = 'grid';
    $('.nav-right').classList.remove('top100');
  });
});
var wrapper_option_nav = $('.header__option--left');
var options_nav = wrapper_option_nav.querySelectorAll('.item-option');
options_nav.forEach((option_nav, index) => {
  option_nav.addEventListener('click', () => {
    $$('.form').forEach((item) => {
      item.classList.add('top2');
    });
    render_home.style.display = 'none';
    $('.nav-right').classList.remove('top100');
    if (checkAdmin) {
      $('.list-orders').style.display = 'none';
      $('.report').style.display = 'none';
    }
    /*neu data luu trong db
    var infor_product = JSON.parse(window.localStorage.getItem('data'));*/
    //new chua co
    var infor_product = [
      {
        name: [
          'ENERGETIC PANT',
          'HIGHER-UP PANT',
          'CABINET BONE SHORT',
          'GARNITURE BLACK SHORT',
          'SUNDRY PANT',
          'INFERIO SHORT',
          'LORRYLOAD CARGO SHORT',
          'CARDINALS SHORT',
        ],
        price: [
          '190000₫',
          '250000₫',
          '534000₫',
          '260000₫',
          '251000₫',
          '356000₫',
          '220000₫',
          '340000₫',
        ],
        quantity: [46, 28, 15, 27, 39, 48, 34, 19],
      },
      {
        name: [
          'INHUMAN HOODIE',
          'WAY ON CLUOD HOODIE',
          'WILDCAT SWEATER',
          'CARREAUX HOODIE',
          'WATER SPLAH HOODIE',
          'MONOGRAM CARDIGAN',
          'CONCRETE TIEDYE SWEATER',
          'SNIPER SCOPE HOODIE',
        ],
        price: [
          '289000₫',
          '399000₫',
          '199000₫',
          '280000₫',
          '380000₫',
          '400000₫',
          '599000₫',
          '320000₫',
        ],
        quantity: [19, 19, 27, 49, 40, 53, 61, 19],
      },
      {
        name: [
          'LEOPARD POLO',
          'SHIP ON YOUR TEE',
          'MAKE TEE',
          'RIOT MEO TEE',
          'THE CROWORS TEE',
          'CLAMOROUS GILE',
          'GLOSSY TEE',
          'LONG SLEEVE WEATER',
        ],
        price: [
          '270000₫',
          '380000₫',
          '499000₫',
          '280000₫',
          '350000₫',
          '199000₫',
          '270000₫',
          '330000₫',
        ],
        quantity: [26, 18, 13, 59, 56, 69, 49, 44],
      },
    ];
    switch (index) {
      case 0:
        removeProductPre(wrapper_product);
        for (var i = 0; i < 3; i++) {
          render_product(i, wrapper_product, infor_product);
        }
        wrapper_product.style.display = 'grid';

        break;
      case 1:
        removeProductPre(wrapper_product);
        render_product(2, wrapper_product, infor_product);
        wrapper_product.style.display = 'grid';
        break;
      case 2:
        removeProductPre(wrapper_product);
        render_product(0, wrapper_product, infor_product);
        wrapper_product.style.display = 'grid';
        break;
      case 3:
        removeProductPre(wrapper_product);
        render_product(1, wrapper_product, infor_product);
        wrapper_product.style.display = 'grid';
        break;
    }
  });
});
// buy product
var your_bag = $('.your-bag');
var app = $('.app');
your_bag.onclick = () => {
  let header = document.querySelector('.header-nav');
  header.classList.add('unactive');
  overlay.style.display = 'block';
  $('.nav-right').style.right = '100px';
};
function closeBag() {
  var overlay = $('#overlay');
  $('.nav-right').style.right = '-50%';
  overlay.style.display = 'none';
  let header = document.querySelector('.header-nav');
  header.classList.remove('unactive');
}
var close_your_bag = $('.close-nav');
close_your_bag.addEventListener('click', closeBag);
var price_total = $('.price-total-text');
var listen_buy = $$('.product-buy-btn');
var product_list = $('.your-list');
function changePrice(price) {
  var length = price.length;
  if (length < 7) return price;
  var arr = price.split('');
  for (var i = 1; i < length / 3; i++) {
    arr.splice(length - 3 * i, 0, '.');
  }
  return arr.join('');
}
var quality_change;
function addEventBuyBtn(e) {
  var parent_product = e.target.parentElement;
  var domQuatity = parent_product.querySelector('.product-quantities span');
  var currentQuantity = Number(domQuatity.textContent);
  var name_product = parent_product.querySelector('p');
  var check_product = product_list.querySelectorAll('.your-product');
  var flag = 1;
  if (currentQuantity < 1) {
    alert(`Sản phẩm: ${name_product.textContent} không còn !`);
    flag = 0;
  } else {
    check_product.forEach((item) => {
      if (name_product.innerText == item.querySelector('p').innerText) {
        if (item.querySelector('.quantities').value * 1 < currentQuantity) {
          item.querySelector('.quantities').value =
            item.querySelector('.quantities').value * 1 + 1;
        }
        flag = 0;
      }
    });
  }
  if (flag) {
    add_product(parent_product);
  }
  quality_change = $$('.quantities');
  change_product();
  quality_change.forEach((element) => {
    element.onchange = function (element) {
      if (element.target.value * 1 >= element.target.getAttribute('max')) {
        alert(
          `San pham ${
            element.target.parentElement.querySelector('p').textContent
          } chi con ${element.target.getAttribute('max')} san pham`
        );
      }
      change_product();
    };
  });
  var delete_your_product = $$('.cart-remove');
  delete_your_product.forEach((element) => {
    var your_bag_info = $$('.your-product');
    element.onclick = function (e) {
      e.target.parentElement.remove();
      change_product();
    };
  });
}
function add_product(parent_product) {
  var product_add = document.createElement('div');
  var name_product = parent_product.querySelector('p');
  product_add.classList.add('your-product');
  var img_product = parent_product.querySelector('img');
  var price_product = parent_product.querySelector('span');
  var domQuatity = parent_product.querySelector('.product-quantities span');
  var currentQuantity = Number(domQuatity.textContent);
  product_add.innerHTML = `
        <img src=${img_product.src} class="your-product-img" alt="">
            <div class="your-product-info">
                <p class="your-product-name">${name_product.innerText}</p>
                <span class="your-product-price">${price_product.innerText}</span>
                <input type="number" class="quantities" value="1" min="1" max=${currentQuantity}>
            </div>
            <i class="fa-solid fa-trash cart-remove"></i>
        `;
  product_list.append(product_add);
}
function change_product() {
  var your_bag_info = $$('.your-product');
  var total = 0;
  for (var i = 0; i < your_bag_info.length; i++) {
    var price = your_bag_info[i].querySelector('.your-product-price').innerText;
    var quantities = your_bag_info[i].querySelector('.quantities').value;
    total += price.slice(0, price.length - 1) * quantities;
  }
  price_total.textContent = changePrice(total + '') + '₫';
  return total;
}
function reRenderQuantity(list_buy) {
  let list_product_home = $$('.product');
  list_buy.forEach((element, index) => {
    list_product_home.forEach((item) => {
      if (
        element.querySelector('p').innerText ==
        item.querySelector('p').innerText
      ) {
        var setQuantity = item.querySelector(
          '.product-quantities span'
        ).textContent;
        item.querySelector('.product-quantities span').textContent =
          Number(setQuantity) -
          Number(element.querySelector('.quantities').value);
      }
    });
  });
}
// customerOrder
var arrOrders = [];
var buy = $('.nav-right .btn');
buy.onclick = function () {
  if (checkUser) {
    var infor_product = JSON.parse(window.localStorage.getItem('data'));
    customerOrder.priceTotal = change_product();
    var list_buy = product_list.querySelectorAll('.your-product');
    if (list_buy.length < 1)
      showErrorToast('Giỏ hàng của bạn chưa có sản phẩm');
    else handleLogin('#form-3');
    $('#form-3 .form-submit').onclick = () => {
      reRenderQuantity(list_buy);
      for (var i = 0; i < list_buy.length; i++) {
        let inforOrder = {};
        inforOrder.name = list_buy[i].querySelector('p').textContent;
        inforOrder.price = list_buy[i].querySelector(
          '.your-product-price'
        ).textContent;
        inforOrder.quantity = list_buy[i].querySelector('.quantities').value;
        infor_product.forEach((product) => {
          for (const [key, values] of Object.entries(product)) {
            var indexPrice;
            if (key == 'name') {
              values.forEach((value, index) => {
                if (value == list_buy[i].querySelector('p').textContent) {
                  indexPrice = index;
                }
              });
            } else if (key == 'quantity' && typeof indexPrice != 'undefined') {
              product[key][indexPrice] =
                product[key][indexPrice] -
                list_buy[i].querySelector('.quantities').value;
            }
          }
        });
        arrOrders.push(inforOrder);
        list_buy[i].remove();
        window.localStorage.setItem('data', JSON.stringify(infor_product));
      }
      customerOrder.order = arrOrders;
      arrOrders = [];
      change_product();
    };
  } else {
    showErrorToast('Vui lòng đăng nhập');
  }
};

//handle
function handleErrLogin(form_index, form_group_index, mess) {
  let form = document.querySelector(form_index);
  let formGroup = form.querySelectorAll('.form-group')[form_group_index];
  let message = formGroup.querySelector('.form-message');
  message.innerText = mess;
  message.style.color = '#f33a58';
}
function handleLogin1(id, name, mess) {
  $('#overlay').style.display = 'block';
  $('.header-nav').classList.add('unactive');
  var form = $(id);
  form.style.display = 'block';
  var closeForm = form.querySelector('.close-form');
  closeForm.addEventListener('click', () => {
    form.style.display = 'none';
    $('#overlay').style.display = 'none';
    $('.header-nav').classList.remove('unactive');
  });
  if (name) {
    let nav = document.querySelector('.header__option--right');
    nav.querySelector('.item-regis').style.display = 'none';
    nav.querySelector('.item-login').classList.add('unactive');
    nav.querySelector('.item-login span').textContent = name;
    form.querySelectorAll('input').forEach((element) => {
      element.value = '';
    });
    if (checkAdmin) {
      $('.your-bag').style.display = 'none';
      $('.admin-bag').style.display = 'inline-block';
      $('.notification').style.display = 'inline-block';
      $('.data').style.display = 'inline-block';
    }
    closeForm.click();
  } else {
    form.querySelectorAll('input').forEach((element) => {
      element.value = '';
    });
    closeForm.click();
  }
  setTimeout(() => showSuccessToast(mess), 300);
}
//xu li hoa don
function randomCodeOrders() {
  let s = '';
  for (let i = 0; i < 7; i++) {
    s += Math.floor(Math.random() * 10);
  }
  return s;
}
//Xu li don hang da xu li cua admin
let adminBag = $('.admin-bag');
adminBag.addEventListener('click', () => {
  if (checkAdmin) {
    $('.report').style.display = 'none';
    $('.container').style.display = 'none';
    $('.bottom-product').style.display = 'none';
    let wrapper_order = $('.list-orders');
    wrapper_order.style.display = 'block';
    if ($$('.item-order').length < 1) {
      admin.orders.forEach((item) => {
        {
          let itemOrder = document.createElement('div');
          itemOrder.classList.add('item-order');
          itemOrder.innerHTML = `
            <h4 class="code-order">Mã đơn hàng: ${
              item.code
            }<i class="fa-sharp fa-solid fa-square-check icon-check"></i></h4>
            <h4>Ngày lập đơn: ${item.date}</h4>
            <ul clas="infor-list">
              <h4>Thông tin khách hàng </h4>
              <li class="infor-item">Email: ${item.infor.email}</li>
              <li class="infor-item">Tên: ${item.infor.fullname}</li>
              <li class="infor-item">Địa chỉ: ${item.infor.location}</li>
              <li class="infor-item">Số điện thoại: ${item.infor.phone}</li>
            </ul>
            <h4 >Các sản phẩm:</h4>
            <ul class="product-list">
              ${item.order
                .map((value) => {
                  return `
                        <span>Tên: ${value.name}</span>
                        <span>Giá: ${value.price}</span>
                        <span>Số lượng: ${value.quantity}</span>
                        <br/>
                      `;
                })
                .join('')}
            </ul>
            <h4>Tổng giá: ${item.priceTotal}</h4>
          `;
          wrapper_order.appendChild(itemOrder);
        }
      });
      var icon_check = $$('.icon-check');
      icon_check.forEach((item) => {
        item.addEventListener('click', (e) => {
          let code_product = e.target.parentElement.textContent;
          let s_code = code_product.slice(
            code_product.length - 7,
            code_product.length
          );
          admin.orders.forEach((item, index) => {
            if (item.code == s_code) {
              admin.orders.splice(index, 1);
            }
          });
          $$('.item-order').forEach((element) => {
            let element_code = element
              .querySelector('.code-order')
              .textContent.slice(code_product.length - 7, code_product.length);
            if (element_code == s_code) {
              wrapper_order.removeChild(element);
              window.localStorage.setItem(
                'buivananh@gmail.com',
                JSON.stringify(admin)
              );
            }
          });
        });
      });
    }
  }
});
let admin_report = $('.notification');
admin_report.addEventListener('click', () => {
  $('.bottom-product').style.display = 'none';
  $('.list-orders').style.display = 'none';
  $('.container').style.display = 'none';
  $('.report').style.display = 'block';
});
let option_report = $('.report').querySelectorAll('.btn');
function getPrice(index, start, end) {
  let result;
  if (index == 0 || index == 1) result = [];
  else result = {};
  let total_price = 0;
  let quantity_total = 0;
  for (let i = 0; i < admin.orders.length; i++) {
    if (index == 2) total_price += admin.orders[i].priceTotal;
    else total_price = admin.orders[i].priceTotal;
    let day;
    if (index == 0 || index == 1) quantity_total = 0;
    if (admin.orders[i].date.length <= 9) {
      start--;
      end--;
    }
    if (index == 0 || index == 1) {
      day =
        index == 0
          ? admin.orders[i].date
          : admin.orders[i].date.slice(start, end);
    } else {
      day = admin.orders[i].date.slice(start, end);
    }
    admin.orders[i].order.forEach((item) => {
      quantity_total += Number(item.quantity);
    });
    for (let j = i + 1; j < admin.orders.length; j++) {
      let day_next;
      if (index == 0 || index == 1) {
        day_next =
          index == 0
            ? admin.orders[j].date
            : admin.orders[j].date.slice(start, end);
      } else {
        day_next = admin.orders[j].date.slice(start, end);
      }
      if (day_next == day) {
        total_price += admin.orders[j].priceTotal;
        i = j;
        admin.orders[j].order.forEach((item) => {
          quantity_total += Number(item.quantity);
        });
      } else {
        break;
      }
    }
    let result_loop = {
      day: day,
      total_price: total_price,
      quantity: quantity_total,
    };
    if (index == 0 || index == 1) {
      result.push(result_loop);
    } else result = result_loop;
  }
  return result;
}
option_report.forEach((element, index) => {
  element.addEventListener('click', () => {
    let wrapper = $('.figures');
    let result;
    if (index == 0 || index == 1) {
      result = index == 0 ? getPrice(index) : getPrice(index, 3, 5);
      let text = index == 0 ? 'Ngày' : 'Tháng';
      wrapper.innerHTML = result
        .map((item) => {
          return `
              <span>${text}: ${item.day}</span>
              <span>Tổng tiền: ${item.total_price}</span>
              <span>Số lượng: ${item.quantity}</span>
              <br/>
            `;
        })
        .join('');
    } else {
      let text;
      result = getPrice(index, 6, 10);
      text = 'Năm';
      wrapper.innerHTML = `
        <span>${text}: ${result.day}</span>
        <span>Tổng tiền: ${result.total_price}</span>
        <span>Số lượng: ${result.quantity}</span>
        <br/>
      `;
    }
  });
});
// cap nhat thong tin hang hoa
$('.data').onclick = function () {
  handleLogin('#form-4');
};
