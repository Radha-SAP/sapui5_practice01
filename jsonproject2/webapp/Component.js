/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "ar/com/jsonproject2/model/models",
    "sap/ui/model/json/JSONModel"
],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("ar.com.jsonproject2.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                var emp = {
                    "Employeeset": [
                        {
                            "EmployeeID": "05",
                            "Name": "Pratibha",
                            "Department": "ABAP",
                            "Designation": "Software Engineer",
                            "Salary": "70000"
                        },
                        {
                            "EmployeeID": "02",
                            "Name": "Meghna",
                            "Department": "ABAP",
                            "Designation": "Senior Software Engineer",
                            "Salary": "80000"
                        },
                        {
                            "EmployeeID": "03",
                            "Name": "Gautam",
                            "Department": "ABAP",
                            "Designation": "Senior Software Engineer",
                            "Salary": "80000"
                        }
                    ]
                }
                var oInvModel = new JSONModel(emp);
                this.setModel(oInvModel,"employeeList1");

            }
        });
    }
);