


// const contents = getNode('.contents');
// const textField = getNode('#messageInput');
// const commentContainer = getNode('.comment_container');


 document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.querySelector("form[name='chatMessageForm']");
  const messageInput = document.querySelector("input[name='messageInput']");
  const commentContainer = document.querySelector(".comment_container");

  function createChatMessage(message, timestamp) {
    // 채팅 메시지 생성 기능을 구현해 주세요. 위의 HTML 구조를 참고하세요.
    return `
      <div class="myChat flex flex-col items-end justify-center gap-2">
        <div class="chatContents chatSend flex items-end gap-[0.2rem] px-3 py-0">
          <time class="chatTime text-contentSecondary text-[0.65rem] leading-lh-160" datetime="${timestamp}">${timestamp}</time>
          <p class="chatMessage text-[white] text-paragraph-Medium leading-lh-160 px-3.5 py-2 rounded-[20px]  bg-blue-400">${message}</p>
        </div>
      </div>
    `;
    
  }

  
  
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); // 새로고침 방지

    if (!messageInput.value) {
      return; // 메시지가 없을 경우, 전송 멈추기
    }

    const chatMessage = createChatMessage(messageInput.value, new Date().toLocaleString());

    // 기존 채팅 메시지에 새로운 메시지 추가 및 새로운 메시지로 스크롤 이동
    commentContainer.innerHTML += chatMessage;
    commentContainer.scrollTop = commentContainer.scrollHeight;

    messageInput.value = ""; // 메시지 입력창 비우기
  });

  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) { // 쉬프트를 누르지 않고 엔터를 누른 경우
      event.preventDefault(); // 개행 방지
      
      if (messageInput.value.trim() !== "") { // 메시지가 비어있지 않은 경우만 전송
        messageForm.dispatchEvent(new Event("submit")); 
      }
    }
  });
});


   