import { Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
import { Row, Col } from 'antd';

export default function UploadPage() {
    return (
        <Row>
            <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }} xxl={{ span: 12, offset: 6 }}>
                <h1>Upload That Cat!</h1>
                <Dragger>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                </Dragger>
                <Button>Home</Button>
            </Col>
        </Row>
    )
}