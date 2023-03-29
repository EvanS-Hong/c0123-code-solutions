export default function RegisterFormU() {

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newForm = Object.fromEntries(formData.entries());
    console.log(newForm);
  }

  return (
    <>
      <h1> Uncontrolled form </h1>
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input name="userName" />
      </label>
      <br />
      <label>
        PassWord
        <input name="passWord" />
      </label>
      <br />
      <button type="submit"> Submit </button>
    </form>
    </>
  );
}
