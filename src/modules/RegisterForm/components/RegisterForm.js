import React from "react";
import { Button, Block } from "../../../components";
import { Form, Input } from "antd";
import {
	UserOutlined,
	LockOutlined,
	MailOutlined,
	InfoCircleTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function RegisterForm(props) {
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
	} = props;
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	const success = false;
	return (
		<div>
			<div className='auth__top'>
				<h2>Регистрация</h2>
				<p>Для входа в чат вам нужно зарегестрироваться</p>
			</div>
			<Block>
				{!success ? (
					<Form
						name='normal_login'
						className='login-form'
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onSubmit={handleSubmit}>
						<Form.Item
							validateStatus={
								!touched.email ? "" : errors.email ? "error" : "success"
							}
							hasFeedback
							name='mail'
							// help={!touched.email ? "" : errors.email}
							rules={[
								{
									required: true,
									// message: "Пожалуйста введите ваш email адресс",
								},
							]}>
							<Input
								id='email'
								prefix={<MailOutlined className='site-form-item-icon' />}
								placeholder='Email'
								size='large'
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Item>
						<Form.Item
							hasFeedback
							name='username'
							rules={[
								{
									required: true,
									// message: "Пожалуйста введите ваше имя пользователя",
								},
							]}>
							<Input
								prefix={<UserOutlined className='site-form-item-icon' />}
								placeholder='Ваше имя'
								size='large'
							/>
						</Form.Item>
						<Form.Item
							name='password'
							hasFeedback
							validateStatus={
								!touched.password ? "" : errors.password ? "error" : "success"
							}
							rules={[
								{
									required: true,
									// message: "Пожалуйста введите пароль",
								},
							]}>
							<Input
								id='password'
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								prefix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Пароль'
								size='large'
							/>
						</Form.Item>
						<Form.Item
							name='confirm'
							// hasFeedback
							rules={[
								{
									required: true,
									message: "Пожалуйста подтвердите пароль",
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue("password") === value) {
											return Promise.resolve();
										}

										return Promise.reject(
											new Error("Введеные пароли не совпадают")
										);
									},
								}),
							]}>
							<Input
								prefix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Подтвердите пароль'
								size='large'
							/>
						</Form.Item>
						<Form.Item>
							<Button
								onClick={handleSubmit}
								type='primary'
								htmlType='submit'
								className='login-form-button'
								size='large'>
								Зарегестрироваться
							</Button>
						</Form.Item>
						<Link className='auth__register-link' to='/login'>
							Войти в акаунт
						</Link>
					</Form>
				) : (
					<div className='auth__success-block'>
						<InfoCircleTwoTone style={{ fontSize: "56px" }} />
						<h2>Подтвердите свой акаунт</h2>
						<p>
							На Вашу почту отправлено письмо с ссылкой на подтверждение
							аккаунта
						</p>
					</div>
				)}
			</Block>
		</div>
	);
}

export default RegisterForm;
