
// $(addingItems);
function addingItems() {
    $("#js-shopping-list-form").submit(function(event) {
      event.preventDefault();
      const newItem = $("#shopping-list-entry").val();
  
      $("ul").append(
        `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label checked">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      );
    });
  }
  
  $(addingItems)
  
  // checking items off list
  function checkItem() {
    $("ul").on("click", ".shopping-item-toggle", function(event) {
      $(this).closest("li").find('.shopping-item').toggleClass("shopping-item__checked");
    });
  }
  
  $(checkItem);
  
  //deleting items
  function deleteItems() {
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
      $(this)
        .closest("li")
        .remove();
    });
  }
  
  $(deleteItems);
  