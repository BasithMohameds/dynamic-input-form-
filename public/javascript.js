$(document).ready(function () {
  var date = `<label contenteditable="true" class="labeltext" name="datelabel" type="text">Date  </label><input type="date" class="dateget" />`;
  var time = `<label contenteditable="true" class="labeltext" name="timelabel" type="text">Time  </label><input type="time" class="timeget" />`;
  var Email = `<label contenteditable="true" class="labeltext" name="emaillabel" type="text">Email  </label><input type="email" class="emailget" />`;
  var text = `<label contenteditable="true" class="labeltext" name="textlabel" type="text">Text </label><input type="text" class="textget" />`;
  // var file = `<label contenteditable="true">File : </label><input type="file" name="fileget" />`
  var password = `<label contenteditable="true" class="labeltext" name="passlabel" type="text">Password  </label><input type="password" class="passget" />`;
  var number = `<label contenteditable="true" class="labeltext" name="numberlabel" type="text">Number  </label><input type="number" class="numberget" />`;
  var option = `<label contenteditable="true" class="labeltext" name="numberlabel" type="text">Option  </label>
    <select type="option">
    <option> select </option>
    <option>Javascript</option>
    <option>Node JS</option>
    </select>`;

  var container = $(".container");
  var addButton = $(".newField1");

  $(addButton).click(function () {
    $(container).append(
      `<div>${date}<button class="delete">Delete</button></div>`
    );
  });
  $(container).on("click", ".delete", function () {
    $(this).parent("div").remove();
  });

  var container = $(".container");
  var addButton = $(".newField2");

  $(addButton).click(function () {
    $(container).append(
      `<div>${time}<button class="delete">Delete</button></div>`
    );
  });
  $(container).on("click", ".delete", function () {
    $(this).parent("div").remove();
  });

  var container = $(".container");
  var addButton = $(".newField3");

  $(addButton).click(function () {
    $(container).append(
      `<div>${Email}<button class="delete">Delete</button></div>`
    );
  });
  $(container).on("click", ".delete", function () {
    $(this).parent("div").remove();
  });

  var container = $(".container");
  var addButton = $(".newField4");

  $(addButton).click(function () {
    $(container).append(
      `<div>${text}<button class="delete">Delete</button></div>`
    );
  });
  $(container).on("click", ".delete", function () {
    $(this).parent("div").remove();
  });

  var container = $(".container");
  var addButton = $(".newField6");

  $(addButton).click(function () {
    $(container).append(
      `<div>${password}<button class="delete">Delete</button></div>`
    );
  });
  $(container).on("click", ".delete", function () {
    $(this).parent("div").remove();
  });

  var container = $(".container");
  var addButton = $(".newField7");

  $(addButton).click(function () {
    $(container).append(
      `<div>${number}<button class="delete">Delete</button></div>`
    );
  });
  $(container).on("click", ".delete", function () {
    $(this).parent("div").remove();
  });

  var container = $(".container");
  var addButton = $(".newField8");
  $(addButton).click(function () {
    $(container).append(
      `<div>${option}<button class="delete">Delete</button></div>`
    );
  });
  $(container).on("click", ".delete", function () {
    $(this).parent("div").remove();
  });
});
$(document).ready(function () {
  $(".submited").click(function () {
    var arraydata = [];
    var renderDbObj;
    $(".labeltext").each(function (index, element) {
      var label = $(element).text();
      var type = $(element).attr("type");
      var values = $(element).next().val();
      var vtype = $(element).next().attr("type");
      renderDbObj = {
        labelname: label,
        labeltype: type,
        textboxval: values,
        texttype: vtype,
      };
      arraydata.push(renderDbObj);
    });

    $.ajax({
      method: "post",
      url: "http://localhost:8080/home",
      data: { mydata: JSON.stringify(arraydata) },
      success: function (data) {},
    });
  });
});

//test button

function test() {
  $.ajax({
    url: "http://localhost:8080/form",
    success: function (allvalues) {
      allvalues.forEach(function (data) {
        var dynamicdata = "";
        dynamicdata =
          dynamicdata +
          data._id +
          '<button data-attr="' +
          data._id +
          '" class ="uniqueID">Show</button>';
        $(".renderForm").append(dynamicdata);
      });
      $(".uniqueID").on("click", function () {
        var genid = $(this).attr("data-attr");
        showdata(genid);
      });
    },
  });
}
function showdata(id) {
  alert(id);
  $.ajax({
    url: `http://localhost:8080/form/data/${id}`,
    success: function (data) {
      var basith = JSON.parse(JSON.stringify(data));
      basith.forEach(function (value) {
        var obj = value.mydata;
        Object.keys(obj).forEach(function (ayyayo) {
          var success = obj[ayyayo];
          let htmlElement = "</br>";

          if (success.texttype == "date") {
            htmlElement += "<label>" + success.labelname + "<label/>";
            htmlElement += `<input type="date" value="${success.textboxval}"/>`;
          }
          if (success.texttype == "time") {
            htmlElement += "<label>" + success.labelname + "<label/>";
            htmlElement += `<input type="time" value="${success.textboxval}" />`;
          }
          if (success.texttype == "email") {
            htmlElement += "<label>" + success.labelname + "<label/>";
            htmlElement += `<input type="email" / value="${success.textboxval}">`;
          }
          if (success.texttype == "text") {
            htmlElement += "<label>" + success.labelname + "<label/>";
            htmlElement += `<input type="text" / value="${success.textboxval}">`;
          }
          if (success.texttype == "password") {
            htmlElement += "<label>" + success.labelname + "<label/>";
            htmlElement += `<input type="password" / value="${success.textboxval}">`;
          }
          if (success.texttype == "number") {
            htmlElement += "<label>" + success.labelname + "<label/>";
            htmlElement += `<input type="number" / value="${success.textboxval}">`;
          }
          if (success.texttype == "option") {
            htmlElement += "<label>" + success.labelname + "<label/>";
            htmlElement += `<input type="option"  value="${success.textboxval}"/>`;
          }
          $(".renderForm").append(htmlElement);
        });
      });
    },
  });
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
