import styles from "./Contact.module.css";
import tshirts from "../../assets/images/tshirts.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ScreenLabel } from "../../components";
import { useState } from "react";
import { Helmet } from "react-helmet";

const schema = yup
    .object({
        name: yup.string().trim().min(3).max(50).required(),
        email: yup.string().trim().email().min(3).required(),
        subject: yup.string().trim().min(3).max(30).required(),
        message: yup.string().trim().min(3).max(200).required(),
    })
    .required();

export const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
        setShowLabel(true);
        reset();
    }

    const [showLabel, setShowLabel] = useState(false);

    const handleUnmount = () => {
        setShowLabel(false);
    };

    return (
        <main className={styles.productPage}>
            <Helmet>
                <title>Contact | Bazaari</title>
            </Helmet>
            <img src={tshirts} alt="T-shirts" className={styles.productImageLarge} />
            <section className={styles.productInfo}>
                {showLabel && <ScreenLabel message={`Form submitted`} onUnmount={handleUnmount} />}
                <h2>Contact us</h2>
                <div className={styles.divider}></div>
                <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 50,
                        })}
                    />
                    <p className={styles.formError}>{errors.name?.message}</p>
                    <label htmlFor="email">E-mail</label>
                    <input
                        name="email"
                        {...register("email", {
                            required: true,
                        })}
                    />
                    <p className={styles.formError}>{errors.email?.message}</p>
                    <label htmlFor="subject">Subject</label>
                    <input
                        name="subject"
                        {...register("subject", {
                            required: true,
                            minLength: 3,
                            maxLength: 30,
                        })}
                    />
                    <p className={styles.formError}>{errors.subject?.message}</p>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        {...register("message", {
                            required: true,
                            minLength: 10,
                            maxLength: 200,
                        })}
                    />
                    <p className={styles.formError}>{errors.message?.message}</p>
                    <button type="submit" className="cta large">
                        Submit
                    </button>
                </form>
            </section>
        </main>
    );
};
