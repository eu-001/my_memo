import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

interface TestType {
  content: string;
  createdDt: string;
  id: number;
  title: string;
}
const Test1: React.FC = () => {
  const [testData, setTestData] = useState<TestType[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [form, setForm] = useState({ title: "", content: "", id: "" });

  const fetchData = async () => {
    try {
      let response: any = await axios.get("http://localhost:3001/api/test");
      console.log(`## response: `, response);
      response = response?.data?.data;

      let data: TestType[] = response;
      console.log(`## response.data: `, data);
      setTestData(data);
    } catch (error: any) {
      console.error(`!!! err: `, error?.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setTitle(value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setContent(value);
  };
  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setId(Number(value)); // 🔥 숫자로 변환해서 상태 업데이트!
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id: id,
      title: title,
      content: content,
    };

    try {
      const res = await axios.post("http://localhost:3001/api/save", data);
      //res.data
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {testData?.map((e) => (
          <div key={e.id}>
            <div>{e?.title}</div>
          </div>
        ))}
        <div>{testData?.length}</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>id :</label>
            <input value={id} name="id" onChange={handleChangeId} />
          </div>
          <div>
            <label>title:</label>
            <input value={title} name="title" onChange={handleChange} />
          </div>
          <div> title:{title} </div>
          <div>
            <label>content:</label>
            <input value={content} name="content" onChange={handleChange2} />
          </div>
          <button onClick={handleSubmit}>save</button>
        </form>
      </div>
    </div>
  );
};

export default Test1;
