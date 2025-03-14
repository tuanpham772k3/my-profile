// ContactForm.jsx
import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    // State để quản lý form
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    // State để quản lý lỗi
    const [errors, setErrors] = useState({});

    // State để quản lý focus
    const [focusedField, setFocusedField] = useState(null);

    // Xử lý khi thay đổi giá trị input
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });

        // Xóa lỗi khi người dùng bắt đầu nhập lại
        if (errors[id]) {
            setErrors({
                ...errors,
                [id]: null,
            });
        }
    };

    // Xử lý khi focus vào input
    const handleFocus = (e) => {
        setFocusedField(e.target.id);
    };

    // Xử lý khi blur khỏi input
    const handleBlur = (e) => {
        setFocusedField(null);
        validateField(e.target.id, e.target.value);
    };

    // Hàm kiểm tra tính hợp lệ của trường
    const validateField = (fieldName, value) => {
        let fieldErrors = { ...errors };

        switch (fieldName) {
            case "firstName":
                if (!value.trim()) {
                    fieldErrors.firstName = "Vui lòng nhập họ.";
                }
                break;
            case "lastName":
                if (!value.trim()) {
                    fieldErrors.lastName = "Vui lòng nhập tên.";
                }
                break;
            case "email":
                if (!value.trim()) {
                    fieldErrors.email = "Vui lòng nhập email.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    fieldErrors.email = "Vui lòng nhập địa chỉ email hợp lệ.";
                }
                break;
            default:
                break;
        }

        setErrors(fieldErrors);
    };

    // Xử lý khi submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra tất cả các trường bắt buộc
        let formErrors = {};
        if (!formData.firstName.trim()) {
            formErrors.firstName = "Vui lòng nhập họ.";
        }
        if (!formData.lastName.trim()) {
            formErrors.lastName = "Vui lòng nhập tên.";
        }
        if (!formData.email.trim()) {
            formErrors.email = "Vui lòng nhập email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            formErrors.email = "Vui lòng nhập địa chỉ email hợp lệ.";
        }

        setErrors(formErrors);

        // Nếu không có lỗi, gửi form
        if (Object.keys(formErrors).length === 0) {
            alert("Form đã được gửi thành công!");
            // Reset form sau khi gửi
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            });
        }
    };

    // Xác định class cho form-group
    const getInputClass = (fieldName) => {
        let classes = "form-control";
        if (focusedField === fieldName) classes += " focused";
        if (errors[fieldName]) classes += " error";
        if (formData[fieldName]?.trim() !== "") {
            classes += " filled";
        }
        return classes;
    };

    return (
        <div className="contact-form">
            <form id="contact" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName" className="required">
                            First Name
                        </label>
                        <div className={getInputClass("firstName")}>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                            />
                            <div className="input-line"></div>
                            <div className="input-highlight"></div>
                        </div>
                        {errors.firstName && (
                            <div className="error-message">{errors.firstName}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="required">
                            Last Name
                        </label>
                        <div className={getInputClass("lastName")}>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                            />
                            <div className="input-line"></div>
                            <div className="input-highlight"></div>
                        </div>
                        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="required mt-2">
                        Email
                    </label>
                    <div className={getInputClass("email")}>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                        <div className="input-line"></div>
                        <div className="input-highlight"></div>
                    </div>
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <div className={getInputClass("subject")}>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <div className="input-line"></div>
                        <div className="input-highlight"></div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <div className={getInputClass("message")}>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        ></textarea>
                        <div className="input-line"></div>
                        <div className="input-highlight"></div>
                    </div>
                </div>

                <button type="submit" className="submit-btn">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
