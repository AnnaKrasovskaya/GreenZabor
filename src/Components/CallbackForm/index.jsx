import "./index.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import InputMask from "react-input-mask";

export default function CallbackForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const url = "https://poko.by/wp-json/telegram-bot/v1/send-message";
    await axios
      .post(url, {
        chat_id: "-4963566497",
        message:
          "Заявка с сайта Greenzabor.by! \n 🙎‍♂️ Имя: " +
          data.name +
          "\n ☎️Телефон: " +
          data.phone,
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        setIsSuccess(true);
      });
  };

  return (
    <section className={"form"}>
      <div className="container">
        <div className="form__title">Есть вопрос? Мы перезвоним!</div>
        <form className="form__wrap" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__group">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder={"Ваше имя"}
            />
            {errors.name && <span className="error">Обязательное поле</span>}
          </div>
          <div className="form__group">
            <InputMask
              mask="+375 (99) 999-99-99"
              {...register("phone", { required: true })}
              placeholder="Телефон"
            />
            {errors.phone && <span className="error">Обязательное поле</span>}
          </div>
          <div className="form__group">
            <button className={"btn"}>Отправить</button>
          </div>
        </form>
        <div className={"form__success " + (isSuccess ? "active" : "")}>
          Спасибо за заявку!
          <button className="btn btn-close" onClick={() => setIsSuccess(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
