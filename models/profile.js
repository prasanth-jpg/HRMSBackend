const ProfileSchema = new mongoose.Schema(
    {
        FirstName: { type: String, required: true, unique: true },
        MiddleName: { type: String, required: true },
        LastName: { type: String, required: true },
        Gander: { type: String, required: true },
        ShowDateOfBirthYear: { type: Boolean, required: true },
        DateOfBirth: { type: String, required: true },

        DateOfBirthAccess: { type: Boolean, required: true },
        MarriageAnniversaryAccess: { type: Boolean, required: true },
        OfficeMobileAccess: { type: Boolean, required: true },

        MaritalStatus: { type: String, required: true },
        MaritalStatusSince: { type: String, required: true },

        MobileAccess: { type: String, required: true },
        PersanalEmailId: { type: String, required: true },
        PersanalEmailAccess: { type: Boolean, required: true },
        PersanalMobileAccess: { type: Boolean, required: true },
        PersanalMobileNumber: { type: String, required: true },

        OfficeMobileNo: { type: String, required: true },
        FacebookID: { type: String, required: true },
        LinkdInID: { type: String, required: true },
        AddressAsPertheAadharCard: { type: String, required: true },
        PresentPortalAddress: { type: String, required: true },
        PermanentPortalAddress: { type: String, required: true },
        UserID: { type: String, required: true },
    },
    { timestamps: true }
);
