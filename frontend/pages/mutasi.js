import React, { useState } from 'react';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import TabMenu from '@/components/shared/TabMenuUser';
import withAuth from '@/hoc/withAuth';

const Mutasi = (props) => {
    return (
        <BaseLayout
            user={props.user.username}
        >
            <BasePage>
                <TabMenu />
                <div className="containerUser">
                    <h1>Mutasi Saldo</h1>
                </div>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(Mutasi)("user");