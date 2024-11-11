document.addEventListener("DOMContentLoaded", () => {
    // 삭제 기능
    document.querySelectorAll(".delete-button").forEach(button => {
        button.addEventListener("click", async (e) => {
            const entryId = e.target.dataset.id;
            if (confirm("정말 삭제하시겠습니까?")) {
                try {
                    const response = await fetch(`/guestbook/${entryId}`, { method: "DELETE" });
                    if (response.ok) {
                        alert("삭제되었습니다.");
                        location.reload();
                    } else {
                        alert("삭제 실패");
                    }
                } catch (error) {
                    console.error("삭제 중 에러:", error);
                }
            }
        });
    });

    // 수정 기능
    document.querySelectorAll(".edit-button").forEach(button => {
        button.addEventListener("click", (e) => {
            const entryDiv = e.target.closest(".entry");
            const message = entryDiv.querySelector(".message");
            const author = entryDiv.querySelector(".author");
            const saveButton = entryDiv.querySelector(".save-button");

            // 수정 가능 상태로 변경
            message.contentEditable = true;
            author.contentEditable = true;
            saveButton.style.display = "inline";
            e.target.style.display = "none"; // 수정 버튼 숨기기
        });
    });

    // 수정 완료
    document.querySelectorAll(".save-button").forEach(button => {
        button.addEventListener("click", async (e) => {
            const entryDiv = e.target.closest(".entry");
            const entryId = e.target.dataset.id;
            const author = entryDiv.querySelector(".author").innerText;
            const message = entryDiv.querySelector(".message").innerText;

            try {
                const response = await fetch(`/guestbook/${entryId}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ author, message })
                });
                if (response.ok) {
                    alert("수정되었습니다.");
                    location.reload();
                } else {
                    alert("수정 실패");
                }
            } catch (error) {
                console.error("수정 중 에러:", error);
            }
        });
    });
});
