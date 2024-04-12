$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip(); // tooltips

  $("#tax-calculator-form").on("submit", function (event) {
    event.preventDefault();

    var isValid = true;
    var isNumber = true;

    // Check if any input is not a number
    $("input").each(function () {
      var input = $(this);
      var parentDiv = input.parent();
      var errorFeedback = parentDiv.find(".invalid-feedback");

      // Check only numeric characters
      if (input.val() !== "" && !/^\d+$/.test(input.val())) {
        isNumber = false;
        input.addClass("is-invalid");
        errorFeedback
          .attr("data-bs-original-title", "Please enter numbers only")
          .show();
      } else {
        input.removeClass("is-invalid");
        errorFeedback.attr("data-bs-original-title", "").hide();
      }

      // Check if any field is empty
      if (input.val() === "") {
        isValid = false;
        input.addClass("is-invalid");
        errorFeedback
          .attr("data-bs-original-title", "Input is mandatory")
          .show();
      } else if (!/^\\d+$/.test(input.val())) {
        //input is alrdy invalid
      } else {
        input.removeClass("is-invalid");
        errorFeedback.attr("data-bs-original-title", "").hide();
      }
    });

    if ($("select").val() === "") {
      $("select").addClass("is-invalid");
      return;
    } else {
      $("select").removeClass("is-invalid");
    }

    // If any input is not a number or any field is empty, do not proceed
    if (!isValid || !isNumber) {
      return;
    }

    // Proceed with the tax calculation
    var grossIncome = parseFloat($("#annual-income-gross").val());
    var extraIncome = parseFloat($("#annual-income-extra").val());
    var ageGroup = parseFloat($("#age-group").val());
    var totalDeductions = parseFloat($("#total-deductions").val());

    var overallIncome = grossIncome + extraIncome - totalDeductions;

    var result = calculateTax(overallIncome, ageGroup);

    if (overallIncome < 800000) {
      $("#result-modal .modal-body").text(
        "There's no tax deduction for you, hence your overall income is " +
          overallIncome
      );
    } else {
      $("#result-modal .modal-body").text(
        "Your overall income will be " + result + " after tax deductions"
      );
    }

    // Open the modal
    $("#result-modal").modal("show");
    $(".close").modal("hide");
  });

  // Hide tooltip when user starts to correct the input
  $("input").on("input", function () {
    var input = $(this);
    var tooltip = bootstrap.Tooltip.getInstance(input[0]);
    if (tooltip) {
      tooltip.hide();
    }
    input.removeClass("is-invalid");
  });

  //Hide tooltip for select
  $("select").on("change", function () {
    var select = $(this);
    select.removeClass("is-invalid");
  });
});

function calculateTax(overallIncome, age) {
  var taxRate;
  if (age === 1) {
    taxRate = 0.3;
  } else if (age === 2) {
    taxRate = 0.4;
  } else {
    taxRate = 0.1;
  }

  var taxAmount;
  if (overallIncome <= 800000) {
    taxAmount = 0;
  } else {
    var taxableIncome = overallIncome - 800000;
    taxAmount = taxRate * taxableIncome;
  }

  return taxAmount;
}
