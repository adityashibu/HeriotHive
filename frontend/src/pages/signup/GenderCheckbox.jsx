import React from 'react'

const GenderCheckbox = () => {
    return (
        <div className="flex mt-3 gap-4">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="checkbox border-primaryBlue [--chkbg:theme(colors.primaryBlue)] [--chkfg:white] checked:border-primaryBlue"
                    />
                    <span className="label-text">Male</span>
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="checkbox border-primaryBlue [--chkbg:theme(colors.primaryBlue)] [--chkfg:white] checked:border-primaryBlue"
                    />
                    <span className="label-text">Female</span>
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox
