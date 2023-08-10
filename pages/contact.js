import React from 'react';
import Head from 'next/head';

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact us</title>
            </Head>
            <main>
                <div className="contact__us">
                    {/* <p>
                        Provide details below
                    </p> */}
                    <form>
                        <div className="form__group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="form__group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form__group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default contact;