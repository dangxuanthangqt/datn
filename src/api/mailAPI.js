import axios from 'axios'

export const sendMail = (data) => axios.post('http://localhost:3001/mailer', { data })

export const sendMailInterView = (data) => axios.post('http://localhost:3001/mailer/interview', { data })
export const sendMailReject = (data) => axios.post('http://localhost:3001/mailer/reject', { data })
