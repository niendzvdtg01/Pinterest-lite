import '../profile.scss';

export default function Header() {
    return (
        <>
            <div className="profileheader d-flex justify-content-center align-items-center">
                <div className="text-center py-3">
                    <h3 className="mb-1">Your Profile</h3>
                    <p className="text-muted mb-0">
                        Manage your personal information and creative identity
                    </p>
                </div>
            </div>
        </>
    )
}
