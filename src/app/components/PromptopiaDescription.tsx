import { Space } from "antd"
import Paragraph from "antd/es/typography/Paragraph"

function PromptopiaDescription() {
    return (
        <Space direction='vertical' align='center'>
            <Paragraph style={{
                textAlign: "center",
                fontSize: "16px",
                color: "#adadad",
            }}> <span style={{
                color: "black",
                fontWeight: "inherit",
                textDecoration: "underline"
            }}>Promptopia</span> is an innovative platform designed to save and manage your creative prompts. With Promptopia, you can easily store, organize, and access your collection of prompts, whether for writing, design, development, or other creative activities. The platform ensures that your creative inspirations are always organized in one place, making them readily available whenever you need them. Promptopia helps you keep track of your brilliant ideas, ensuring they are never lost and are always at your fingertips.</Paragraph>
        </Space>
    )
}

export default PromptopiaDescription