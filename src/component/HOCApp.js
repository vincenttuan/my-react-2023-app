
// 管理員機密組件
function SecureComponent() {
    return <div>這是管理員專用機密信息。</div>
}

// 高階組件
function withAdminPermission(WrappedComponent) {
    return function EnchanceSecureComponent({isAdmin, ...props}) {
        // 獲取今日日期
        const today = new Date().toLocaleTimeString();

        // 渲染日期 + copyright
        const renderDateAndCopyRight = () => <div>日期：{today} <p /> 版權所有 ...</div>

        // 條件渲染基於 isAdmin 屬性內容
        return (
            <>
                {/* 網頁中會根據 isAdmin 來決定出現的內容 */}
                {
                    isAdmin ? (
                        <WrappedComponent {...props} />
                    ) : (
                        <div>這是一般大家可以看到的內容。</div>
                    )
                }

                {/* 網頁中總是要出現的內容 */}
                {renderDateAndCopyRight()}

            </>
        );
    }
}

// 利用 HOC 模式
const EnchanceSecureComponent = withAdminPermission(SecureComponent);

function HOCApp() {
    const isAdmin = true;
    return <EnchanceSecureComponent isAdmin={isAdmin} />
}

export default HOCApp;