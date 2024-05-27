
const Contact = () => {
  return (
    <div className="touch-me">
    <div className="form-container">
      <form method="post">
    <div>
        <input type="email" name="email" placeholder="Your Email"/>
    </div>
    <div>
    <textarea id="message" name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
</div>
    <div>
    <input type="submit" value={'Send Mail'}/>
</div>
    </form>
</div>
    </div>
  )
}

export default Contact
