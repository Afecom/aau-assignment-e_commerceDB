import crypto from 'crypto'

export default Hasher = (password) => {
    const salt = 'A random sycret'
    const hash = crypto.createHmac('sha256', salt)
                        .update(password)
                        .digest('hex')
    return hash
}