const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
//위에 것들은 정의한 dom 요소들

function onAdd() {
  // Add 버튼이 클릭되었을 때 이벤트를 처리하는 함수
  // 1. 사용자가 입력한 테스트를 받아옴
  const text = input.value;
  console.log(text);

  // 2. 새로운 아이템을 만듦(텍스트 + 삭제 버튼(휴지통))
  const item = createItem(text);

  // 3. items 컨테이너 안에 2번에서 새로 만든 아이템을 추가한다.
  items.appendChild(item); // appendcChild()라는 api

  // 4. input을 초기화한다
  input.value = '';
  input.focus();
}

function createItem() {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

// 클릭이 되면 우리가 등록한 콜백함수(onAdd()) 호출
//
