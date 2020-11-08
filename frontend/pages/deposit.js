import React, { useState } from 'react';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import TabMenu from '@/components/shared/TabMenuUser';
import withAuth from '@/hoc/withAuth';

const Deposit = (props) => {
    return (
        <BaseLayout
            user={props.user.username}
        >
            <BasePage>
                <TabMenu />
                <div className="containerUser">
                    <h1>Riwayat Deposit</h1>
                </div>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(Deposit)('user');