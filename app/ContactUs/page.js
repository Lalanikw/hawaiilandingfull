import ContactForm from "../../components/ContactForm";

export default function page() {
  return (
    <div className="p-5 max-w-3xl mx-auto bg-green-50 mb-5 mt-32">
      <h1 className="p-4 text-3xl font-bold text-center text-green-400">Contact Us</h1>
      <p className="pl-4 text-center">Please fillout the form below. We will
        get back to you as soon as possible. </p>

      <ContactForm />
    </div>
  );
}

