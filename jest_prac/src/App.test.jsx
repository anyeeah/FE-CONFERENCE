//App.test.js
const axios = require('axios');
const { fetchUserName, calculateSum } = require('./App');

jest.mock("axios"); // axios 모킹

describe("유저 이름 패치 기능", () => {
  beforeEach(() => {
    axios.get.mockReset(); // 각 테스트 실행되기 전 axios mock 초기화
  });

  test("ID 값으로 유저이름 잘 가져오는지 검증", async () => {
    // axios의 응답을 모킹
    const mockData = { data: { name: "Leanne Graham" } };
    axios.get.mockResolvedValueOnce(mockData);

    const userName = await fetchUserName(1);
    expect(userName).toBe("Leanne Graham");
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    // axios.get함수가 https://jsonplaceholder.typicode.com/users/1 이 인자로 불러와진건지 검증
  });
});

describe("덧셈 기능", () => {
  test("맞게 계산을 하는지 검증", () => {
    const result = calculateSum("4,5,9");
    expect(result).toBe(18); // 4 + 5 + 9 = 18
  });
});
