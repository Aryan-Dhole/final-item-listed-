const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const items = document.getElementById('items')
const filter = document.getElementById('filter')
const clear = document.getElementById('clearBtn')

//--- eventlistners
form.addEventListener('submit', addItem)
items.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)


//--- adding Items
function addItem(e) {
    e.preventDefault();

    const NewItem = document.getElementById('itemInput');

    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(NewItem.value))

    const deletebtn = document.createElement('button')

    deletebtn.className = 'btn btn-danger btn-sm delete-btn'

    deletebtn.appendChild(document.createTextNode('X'))

    li.appendChild(deletebtn)
    itemList.appendChild(li)
}

//---delete items

function removeItem(e) {
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

//---filtering items

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const items = document.getElementsByTagName('li');

    Array.from(items).forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(text)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

clear.addEventListener('click', function () {
    if (confirm('are you sure to delete all items?'))
        itemList.innerHTML = '';
}

)



